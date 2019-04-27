import { gunOptions, saatOptions } from './dropdown.data';
import { Component, OnInit } from '@angular/core';
import { ScheduleMockService } from 'src/app/mocks/schedule.mock.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ScheduleUnit, ScheduleBlock } from 'src/app/models/schedule.model';
import { Schedule } from './schedule';
import { SyllabusService } from 'src/app/services/syllabus.service';
import { Roles, RolesWord, Titles, TitlesWord } from 'src/app/enums';

import { HostListener } from '@angular/core';

@Component({
  selector: 'dpa-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class ScheduleComponent implements OnInit {

  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      if (this.goster != 6) {
        this.tumunuSec();
      }
    }
  }

  public titles = Titles;
  public titlesWord = TitlesWord;

  lessons: ScheduleUnit[] = [];
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
    loc: "",
    grp: "",
    semester: "",
  }

  displayDialog: boolean = false;

  goster: number;

  selected: ScheduleBlock;

  dropdownOptions: any = {};

  duzenlemeModeli: any = {};

  dersStyle = {
    adi: {},
    loc: {},
    wrapper: {},
    ins: {}
  };

  uzat: boolean = false;
  constructor(
    private scheduleService: SyllabusService
  ) { }

  showDialog() {
    this.displayDialog = true;
  }

  selectLesson(event: Event, block: ScheduleBlock) {
    this.duzenlemeModeli = {};
    this.selected = block;
    this.displayDialog = true;
    event.preventDefault();

    let sclblrGunler = this.schedule.secilebilirGunler(this.selected.blockId);
    this.dropdownOptions.gunOptions = gunOptions.filter((opt) => {
      if (sclblrGunler.includes(opt.value)) {
        return true;
      } else {
        return false;
      }
    });
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

  saatleriFiltrele(e) {
    this.dropdownOptions.saatOptions = [];
    this.dropdownOptions.derslikOptions = [];
    let saatler = this.schedule.secilebilirSaatler(this.selected.blockId, this.duzenlemeModeli.gun);
    for (let i = 0; i < saatler.length; i++) {
      let saat = saatler[i];
      (this.dropdownOptions.saatOptions as any[]).push({
        label: saat + ":00" + "-" + (saat + this.selected.units.length) + ":00", value: saat
      })
    }
    this.duzenlemeModeli.saat = null;
    this.duzenlemeModeli.derslik = null;
  }

  toggleGenislik() {
    if (this.uzat) {
      document.getElementById('body').style.width = "100%";
      this.uzat = false;
    } else {
      document.getElementById('body').style.width = "2500px";
      this.uzat = true;
    }
  }

  derslikleriFiltrele(e) {
    this.dropdownOptions.derslikOptions = [];
    let derslikler = this.schedule.secilebilirDerslikler(this.selected.blockId, this.duzenlemeModeli.gun, this.duzenlemeModeli.saat);
    for (let i = 0; i < derslikler.length; i++) {
      let derslik = derslikler[i];
      (this.dropdownOptions.derslikOptions as any[]).push({
        label: derslik.title, value: derslik
      })
    }
    this.duzenlemeModeli.derslik = null;
  }

  saveSchedule() {
    let ders: ScheduleBlock = this.schedule.filtresizBL.find((opt) => {
      return opt.blockId === this.selected.blockId;
    });

    let others: ScheduleBlock[] = this.schedule.filtresizBL.filter((opt) => {
      return opt.blockId !== this.selected.blockId;
    });

    if (this.duzenlemeModeli.gun != null && this.duzenlemeModeli.saat != null && this.duzenlemeModeli.derslik != null) {
      let stOffst = 0;
      ders.units.map((un) => {
        un.dayOfTheWeekType = this.duzenlemeModeli.gun;
        un.starTime = this.duzenlemeModeli.saat + stOffst;
        un.endTime = un.starTime + 1;
        un.location = this.duzenlemeModeli.derslik;
      });
      others.push(ders);
      let lessons = [];

      others.map((bls) => {
        bls.units.map((uns) => {
          lessons.push(uns);
        });
      });

      let schedule = new Schedule();
      this.lessons = lessons;
      this.schedule = schedule.make(lessons);

      this.displayDialog = false;
      this.selected = null;
    }
  }


  ngOnInit() {
    this.scheduleService.get(1).subscribe((syl) => {
      this.lessons = syl.unitLessons;
      let schedule = new Schedule();
      this.schedule = schedule.make(this.lessons);
      this.goster = 6;
      this.fillDropdownOptions();


    }, (err) => {
      console.log(err);
    });
  }

  filtrele() {
    this.schedule.filtrele(this.filtre);
  }

  gunSec(gunNo: number) {
    this.goster = gunNo;
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
  }

  tumunuSec() {
    this.goster = 6;
    this.dersStyle = {
      adi: {},
      loc: {},
      wrapper: {},
      ins: {}
    };
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
