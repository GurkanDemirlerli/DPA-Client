import { gunOptions, saatOptions } from './dropdown.data';
import { Component, OnInit } from '@angular/core';
import { ScheduleMockService } from 'src/app/mocks/schedule.mock.service';
import { Schedule, ScheduleLesson } from './schedule';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'dpa-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  lessons = [];
  schedule: Schedule;
  gunler = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma"
  ];
  filtre = {
    name: "",
    ins: "",
    loc: ""
  }

  displayDialog: boolean = false;

  goster: number;

  selected: ScheduleLesson;

  dropdownOptions: any = {};

  duzenlemeModeli: any = {};

  dersStyle = {
    adi: {},
    loc: {},
    wrapper: {},
    ins: {}
  };

  constructor(private scheduleService: ScheduleMockService) { }

  showDialog() {
    this.displayDialog = true;
  }

  selectLesson(event: Event, lesson: ScheduleLesson) {
    this.duzenlemeModeli = {};
    this.selected = lesson;
    this.displayDialog = true;
    event.preventDefault();
    // this.schedule.secilebilirSaatler(lesson.id, 1);
  }

  fillDropdownOptions() {
    this.dropdownOptions.gunOptions = gunOptions;
    this.dropdownOptions.saatOptions = [];
    this.dropdownOptions.derslikOptions = [];
  }

  getRandomColor() {
    let colors = [
      "00ffc7",
      "00faff",
      "00e0ff",
      "2ec0ff"
    ];
    return colors[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
  }

  saatleriFiltrele() {
    this.dropdownOptions.saatOptions = [];
    this.dropdownOptions.derslikOptions = [];
    let saatler = this.schedule.secilebilirSaatler(this.selected.id, this.duzenlemeModeli.gun);
    for (let i = 0; i < saatler.length; i++) {
      let saat = saatler[i];
      (this.dropdownOptions.saatOptions as any[]).push({
        label: saat + ":00" + "-" + (saat + this.selected.length) + ":00", value: saat
      })
    }
    this.duzenlemeModeli.saat = null;
    this.duzenlemeModeli.derslik = null;
  }

  derslikleriFiltrele() {
    this.dropdownOptions.derslikOptions = [];
    let derslikler = this.schedule.secilebilirDerslikler(this.selected.id, this.duzenlemeModeli.gun, this.duzenlemeModeli.saat);
    console.log("DERSLİKLER", derslikler);
    for (let i = 0; i < derslikler.length; i++) {
      let derslik = derslikler[i];
      (this.dropdownOptions.derslikOptions as any[]).push({
        label: derslik.name, value: derslik
      })
    }
    console.log(derslikler);
    this.duzenlemeModeli.derslik = null;
  }

  saveSchedule() {
    let ders: ScheduleLesson = this.lessons.find((opt) => {
      return opt.id === this.selected.id;
    });

    let others: ScheduleLesson[] = this.lessons.filter((opt) => {
      return opt.id !== this.selected.id;
    });

    console.log(this.duzenlemeModeli);

    if (this.duzenlemeModeli.gun != null && this.duzenlemeModeli.saat != null && this.duzenlemeModeli.derslik != null) {
      ders.day = this.duzenlemeModeli.gun;
      ders.hour = this.duzenlemeModeli.saat;
      ders.location = this.duzenlemeModeli.derslik;

      others.push(ders);

      this.lessons = others;

      let schedule = new Schedule();
      this.schedule = schedule.make(others);

      this.displayDialog = false;
      this.selected = null;
    }
  }

  ngOnInit() {
    this.scheduleService.get().subscribe((lessons) => {
      this.lessons = lessons;
      let schedule = new Schedule();
      this.schedule = schedule.make(lessons);
      this.schedule.filtere(this.filtre);
      this.goster = 6;
      this.fillDropdownOptions();


      console.log(this.schedule);
    }, (err) => {
      console.log(err);
    });
  }

  filtrele() {
    this.schedule.filtere(this.filtre);
  }

  async downloadPDF() {
    this.dersStyle = {
      wrapper: {
        'font-size': '13px',
        'font-weight': '600px',
      },
      adi: {
        'font-size': '15px',
        'background': 'transparent'
      },
      loc: {
        'padding-left': '20px'
      },
      ins: {
        'padding-left': '20px'
      }

    }
    document.getElementById('body').style.width = "7000px";
    const pdf = new jsPDF('l', 'px', [1920, 1080]);

    for (let i = 0; i < 5; i++) {
      const data = document.getElementById('gun' + i);
      let canvas = await html2canvas(data);
      const contentDataURL = canvas.toDataURL('image.png');
      const imgWidth = 1350;
      const imgHeight = 700;
      if (i != 0) pdf.addPage(1920, 1080);
      pdf.addImage(contentDataURL, 'PNG', 100 / 2, 50, imgWidth, imgHeight);
    }
    pdf.save('schedule.pdf');
    document.getElementById('body').style.width = "100%";
    this.dersStyle = {
      adi: {},
      loc: {},
      wrapper: {},
      ins: {}
    };

  }

}
