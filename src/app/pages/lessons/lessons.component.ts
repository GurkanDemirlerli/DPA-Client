import { LessonService } from './../../services/lesson.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmanModel } from 'src/app/models/departman.model';
import { MenuItem, SelectItem } from 'primeng/api';




import {
  FacultyModel,
  LessonModel,
  UpdateLessonModel,
  AddLessonModel
} from 'src/app/models';
import {
  FacultyMockService,
  DepartmentMockService,
  LessonMockService
} from 'src/app/mocks';
import {
  LessonTypesTableView,
  LessonTypes,
  EducationTypesTableView,
  EducationTypes
} from 'src/app/enums';
import {
  weeklyHourOptions,
  educationTypeOptions,
  lessonTypeOptions,
  aktsOptions
} from './dropdown.data';


@Component({
  selector: 'dpa-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  public educationTypesTableView = EducationTypesTableView;
  public educationTypes = EducationTypes;
  public lessonTypes = LessonTypes;
  public lessonTypesTableView = LessonTypesTableView;

  faculty: FacultyModel;

  cols: any[];

  items: MenuItem[];

  displayDialog: boolean;

  lesson: LessonModel = {};

  selectedLesson: LessonModel;

  newLesson: boolean;

  lessons: LessonModel[];

  dropdownOptions: any = {};

  selectedOptions: any = {};


  filters: { departmans: SelectItem[] } = {
    departmans: []
  };

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentMockService,
    private lessonService: LessonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.lessonService.getAll().subscribe((lessons) => {
      lessons.map((lesson) => {
        this.departmentService.get(lesson.departmanId).subscribe((departman) => {
          lesson.departman = departman;
        });
      });

      this.lessons = lessons;
      this.cols = [
        { field: 'lessonCode', header: 'Kodu' },
        { field: 'name', header: 'Adı' },
        { field: 'group', header: 'Grup' },
        { field: 'akts', header: 'AKTS' },
        { field: 'weeklyHour', header: 'Saat' },
        { field: 'lessonType', header: 'Ders Tipi' },
        { field: 'educationType', header: 'Öğrenim Türü' },
        { field: 'departmanId', header: 'Bölüm' },
      ];

      this.items = [
        { label: 'Adil Çizelgeleme Sistemi' },
        { label: 'Dersler' },
      ];
    });

    this.departmentService.getAll().subscribe((departmans) => {
      this.filters.departmans.push({
        label: "Tümü",
        value: null
      });
      departmans.map((departman) => {
        this.filters.departmans.push({
          label: departman.title,
          value: departman.departmanId
        });
      });
    });


    this.fillDropdownOptions();
  }

  fillDropdownOptions() {
    this.dropdownOptions.lessonTypeOptions = lessonTypeOptions;
    this.dropdownOptions.educationTypeOptions = educationTypeOptions;
    this.dropdownOptions.aktsOptions = aktsOptions;
    this.dropdownOptions.weeklyHourOptions = weeklyHourOptions;
  }


  showDialogToAdd() {
    this.newLesson = true;
    this.lesson = {};
    this.selectedOptions = {};
    this.displayDialog = true;
  }

  save() {
    console.log(this.lesson);
    let lessons = [...this.lessons];
    if (this.newLesson) {
      let addLessonModel: AddLessonModel = {
        name: this.lesson.name,
        lessonCode: this.lesson.lessonCode,
        group: this.lesson.group,
        akts: this.lesson.akts,
        weeklyHour: this.lesson.weeklyHour,
        lessonType: this.lesson.lessonType,
        educationType: this.lesson.educationType,
        departmanId: this.lesson.departmanId
      }
      this.lessonService.add(addLessonModel).subscribe(() => {
        lessons.push(this.lesson);
        this.lessons = lessons;
        this.lesson = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    } else {
      console.log(this.lesson);
      let updateLessonModel: UpdateLessonModel = {
        name: this.lesson.name,
        lessonCode: this.lesson.lessonCode,
        group: this.lesson.group,
        akts: this.lesson.akts,
        weeklyHour: this.lesson.weeklyHour,
        lessonType: this.lesson.lessonType,
        educationType: this.lesson.educationType,
        departmanId: this.lesson.departmanId
      }
      let id = this.lesson.lessonId;
      this.lessonService.update(updateLessonModel, id).subscribe(() => {
        lessons[this.lessons.indexOf(this.selectedLesson)] = this.lesson;
        this.lessons = lessons;
        this.lesson = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    }

  }

  delete() {
    this.lessonService.delete(this.selectedLesson.lessonId).subscribe(() => {
      let index = this.lessons.indexOf(this.selectedLesson);
      this.lessons = this.lessons.filter((val, i) => i != index);
      this.lesson = null;
      this.displayDialog = false;
    }, (err) => {
      console.log(err);
    }, () => {

    });
  }

  onRowSelect(event) {
    this.newLesson = false;
    this.lesson = this.clone(event.data);
    this.selectedOptions.aktsOptions = (this.dropdownOptions.aktsOptions as any[]).find((option) => option.code == this.lesson.akts);
    this.selectedOptions.lessonTypeOptions = (this.dropdownOptions.lessonTypeOptions as any[]).find((option) => option.code == this.lesson.lessonType);
    this.selectedOptions.educationTypeOptions = (this.dropdownOptions.educationTypeOptions as any[]).find((option) => option.code == this.lesson.educationType);
    this.selectedOptions.weeklyHourOptions = (this.dropdownOptions.weeklyHourOptions as any[]).find((option) => option.code == this.lesson.weeklyHour);
    this.displayDialog = true;
  }

  clone(f: LessonModel): LessonModel {
    let lesson = {};
    for (let prop in f) {
      lesson[prop] = f[prop];
    }
    return lesson;
  }



}
