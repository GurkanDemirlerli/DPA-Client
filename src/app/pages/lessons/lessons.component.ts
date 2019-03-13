import { LessonTypesTableView } from 'src/app/enums/lesson-types.enum';
import { FacultyMockService } from './../../mocks/faculty.mock.service';
import { LessonModel } from './../../models/lesson.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentMockService } from 'src/app/mocks/department.mock.service';
import { DepartmanModel } from 'src/app/models/departman.model';
import { MenuItem } from 'primeng/api';
import { FacultyModel } from 'src/app/models';
import { AddLessonModel } from 'src/app/models/add-lesson.model';
import { UpdateLessonModel } from 'src/app/models/update-lesson.model';
import { LessonMockService } from 'src/app/mocks/lesson.mock.service';
import { EducationTypesTableView, EducationTypes } from 'src/app/enums/education-types.enum';
import { LessonTypes } from 'src/app/enums';
import { lessonTypeOptions, educationTypeOptions, aktsOptions, weeklyHourOptions } from './dropdown.data';

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

  departmanId: number;

  departman: DepartmanModel;

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


  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentMockService,
    private facultyService: FacultyMockService,
    private lessonService: LessonMockService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.departmanId = params["departmanId"];
      this.departmentService.get(this.departmanId).subscribe((departman) => {
        this.departman = departman;
        this.lessonService.getLessonsForDepartment(this.departmanId).subscribe((lessons) => {
          this.lessons = lessons;
          this.facultyService.get(this.departman.facultyId).subscribe((faculty) => {
            this.faculty = faculty;
            this.cols = [
              { field: 'lessonCode', header: 'Kodu' },
              { field: 'name', header: 'Adı' },
              { field: 'group', header: 'Grup' },
              { field: 'akts', header: 'AKTS' },
              { field: 'weeklyHour', header: 'Saat' },
              { field: 'lessonType', header: 'Ders Tipi' },
              { field: 'educationType', header: 'Öğrenim Türü' },
            ];

            this.items = [
              { label: 'Adil Çizelgeleme Sistemi' },
              { label: 'Fakülteler', routerLink: ['/pages/faculties'] },
              { label: this.faculty.title },
              { label: 'Bölümler', routerLink: ['/pages/departments'] },
              { label: this.departman.title },
              { label: 'Dersler', routerLink: ['/pages/lessons'] },
            ];
          });
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
        departmanId: this.departmanId
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
        departmanId: this.departmanId
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
