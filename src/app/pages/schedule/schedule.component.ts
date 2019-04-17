import { gunOptions, saatOptions } from './dropdown.data';
import { Component, OnInit } from '@angular/core';
import { ScheduleMockService } from 'src/app/mocks/schedule.mock.service';
import { Schedule, ScheduleLesson } from './schedule';

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

  constructor(private scheduleService: ScheduleMockService) { }

  showDialog() {
    this.displayDialog = true;
  }

  selectLesson(event: Event, lesson: ScheduleLesson) {
    this.selected = lesson;
    this.displayDialog = true;
    event.preventDefault();
    this.schedule.secilebilirSaatler(lesson.id,1);
  }

  fillDropdownOptions(){
    this.dropdownOptions.gunOptions = gunOptions;
    this.dropdownOptions.saatOptions = saatOptions;
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

  // fillDropdownOptions() {
  //   this.dropdownOptions.gunOptions = gunOptions;
  //   this.dropdownOptions.
  //   this.dropdownOptions.titleTypeOptions = titleTypeOptions;
  //   this.dropdownOptions.departmanOptions = [];
  //   let departmanOptions = [];
  //   this.departmentService.getAll().subscribe((departmans) => {
  //     departmans.map((departman) => {
  //       departmanOptions.push({
  //         "name": departman.title,
  //         "code": departman.departmanId
  //       });
  //     });
  //     this.dropdownOptions.departmanOptions = departmanOptions;
  //   })
  // }

  ngOnInit() {
    this.scheduleService.get().subscribe((lessons) => {
      this.lessons = lessons;
      let schedule = new Schedule();
      this.schedule = schedule.make(lessons);
      this.schedule.filtere(this.filtre);
      this.goster = 6;
      console.log(this.schedule);
    }, (err) => {
      console.log(err);
    });
  }

  filtrele() {
    this.schedule.filtere(this.filtre);
  }

}
