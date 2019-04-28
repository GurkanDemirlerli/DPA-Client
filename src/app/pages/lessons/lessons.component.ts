import { ListUserModel } from './../../models/list-user.model';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from './../../services/department.service';
import { InstructorLessonService } from './../../services/instructor-lesson.service';
import { DepartmentLessonService } from './../../services/department-lesson.service';
import { LessonService } from './../../services/lesson.service';
import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { MenuItem, SelectItem } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';



import {
  FacultyModel,
  LessonModel,
  UpdateLessonModel,
  AddLessonModel,
  AddDepartmentLessonModel,
  AddUserLessonModel
} from 'src/app/models';

import {
  LessonTypesTableView,
  LessonTypes,
  EducationTypesTableView,
  EducationTypes
} from 'src/app/enums';
import {
  weeklyHourOptions,
  semesterTypeOptions,
  lessonTypeOptions,
  aktsOptions
} from './dropdown.data';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'dpa-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  mform = new FormGroup({
    name: new FormControl('', Validators.required),
    lessonCode: new FormControl('', Validators.required),
    akts: new FormControl('', Validators.required),
    weeklyHour: new FormControl('', Validators.required),
    lessonType: new FormControl('', Validators.required),
    semesterType: new FormControl('', Validators.required),
  });

  public educationTypesTableView = EducationTypesTableView;
  public educationTypes = EducationTypes;
  public lessonTypes = LessonTypes;
  public lessonTypesTableView = LessonTypesTableView;

  cols: any[];

  items: MenuItem[];

  displayDialog: boolean;

  lesson: LessonModel = {};

  selectedLesson: LessonModel;

  newLesson: boolean;

  lessons: LessonModel[];

  dropdownOptions: any = {};

  selectedOptions: any = {};

  displayBolumler: boolean;
  targetBolumler: DepartmentModel[] = [];
  sourceBolumler: DepartmentModel[] = [];

  displayInstructors: boolean;
  targetInstructors: ListUserModel[] = [];
  sourceInstructors: ListUserModel[] = [];


  filters: { departments: SelectItem[] } = {
    departments: []
  };

  constructor(
    private departmentService: DepartmentService,
    private departmentLessonService: DepartmentLessonService,
    private instructorLessonService: InstructorLessonService,
    private lessonService: LessonService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  yazdir(e) {
    console.log(e);
  }

  ngOnInit() {
    this.lessonService.getAll().subscribe((lessons) => {
      this.lessons = lessons;
      this.lessons.map((ls) => {
        this.departmentLessonService.getDepartmentsForLessonId(ls.lessonId).subscribe((dps) => {
          ls.departments = [];
          ls.departments = dps;
          ls.departmentsParsed = "";
          ls.departmentCount = 0;
          dps.map((ds) => {
            ls.departmentsParsed = ls.departmentsParsed + ds.title + " , ";
            ls.departmentCount++;
          })
          ls.departmentCount = ls.departmentCount + " Tane";
          this.instructorLessonService.getUsersByLessonId(ls.lessonId).subscribe((ins) => {
            ls.users = [];
            ls.users = ins;
            ls.usersParsed = "";
            ls.userCount = 0;
            ins.map((ins) => {
              ls.usersParsed = ls.usersParsed + ins.name + " " + ins.surname + " , ";
              ls.userCount++;
            });
            ls.userCount = ls.userCount + " Kişi";
          });
        });
      });

      this.cols = [
        { field: 'lessonCode', header: 'Kodu' },
        { field: 'name', header: 'Adı' },
        // { field: 'group', header: 'Grup' },
        { field: 'akts', header: 'AKTS' },
        { field: 'weeklyHour', header: 'Saat' },
        { field: 'lessonType', header: 'Ders Tipi' },
        { field: 'semesterType', header: 'Dönem' },
        { field: 'departmentCount', header: 'Bölümler', hlpr: 'departmentsParsed' },
        { field: 'userCount', header: 'Dersi Verenler', hlpr:'usersParsed' },
      ];

      this.items = [
        { label: 'Adil Çizelgeleme Sistemi' },
        { label: 'Dersler' },
      ];
    });

    this.departmentService.getAll().subscribe((departments) => {
      this.filters.departments.push({
        label: "Tümü",
        value: null
      });
      departments.map((department) => {
        this.filters.departments.push({
          label: department.title,
          value: department.title
        });
      });
    });


    this.fillDropdownOptions();
  }

  fillDropdownOptions() {
    this.dropdownOptions.lessonTypeOptions = lessonTypeOptions;
    this.dropdownOptions.semesterTypeOptions = semesterTypeOptions;
    this.dropdownOptions.aktsOptions = aktsOptions;
    this.dropdownOptions.weeklyHourOptions = weeklyHourOptions;
  }


  showDialogToAdd() {
    this.newLesson = true;
    this.lesson = {};
    this.selectedOptions = {};
    this.displayDialog = true;
  }

  save(e) {
    let lessons = [...this.lessons];
    if (this.newLesson) {
      let addLessonModel: AddLessonModel = {
        name: this.lesson.name,
        lessonCode: this.lesson.lessonCode,
        akts: this.lesson.akts,
        weeklyHour: this.lesson.weeklyHour,
        lessonType: this.lesson.lessonType,
        semesterType: this.lesson.semesterType,
      }
      //TODO grup ekleme yap
      addLessonModel.lessonGroupTypes = [1];

      this.lessonService.add(addLessonModel).subscribe((res) => {
        this.lesson.lessonId = res.data;
        lessons.push(this.lesson);
        this.lessons = lessons;
        this.lesson = null;
        this.displayDialog = false;
        this.toastr.success('Ders Başarıyla Eklendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Ders eklenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    } else {
      let updateLessonModel: UpdateLessonModel = {
        name: this.lesson.name,
        lessonCode: this.lesson.lessonCode,
        akts: this.lesson.akts,
        weeklyHour: this.lesson.weeklyHour,
        lessonType: this.lesson.lessonType,
        semesterType: this.lesson.semesterType,
        //TODO apiye grup güncelleme eklenebilir
      }

      let id = this.lesson.lessonId;
      this.lessonService.update(updateLessonModel, id).subscribe(() => {
        lessons[this.lessons.indexOf(this.selectedLesson)] = this.lesson;
        this.lessons = lessons;
        this.lesson = null;
        this.displayDialog = false;
        this.toastr.success('Ders Başarıyla Güncellendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Ders güncellenirken bir hata oluştu", "Sunucu Hatası");
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
      this.toastr.success('Ders Başarıyla Silindi', 'Başarılı');
    }, (err) => {
      console.log(err);
      this.toastr.error("Ders silinirken bir hata oluştu", "Sunucu Hatası");

    }, () => {

    });
  }

  onRowSelect(event) {
    this.newLesson = false;
    this.lesson = this.clone(event.data);
    this.selectedOptions.aktsOptions = (this.dropdownOptions.aktsOptions as any[]).find((option) => option.value == this.lesson.akts);
    this.selectedOptions.lessonTypeOptions = (this.dropdownOptions.lessonTypeOptions as any[]).find((option) => option.value == this.lesson.lessonType);
    this.selectedOptions.semesterTypeOptions = (this.dropdownOptions.semesterTypeOptions as any[]).find((option) => option.value == this.lesson.semesterType);
    this.selectedOptions.weeklyHourOptions = (this.dropdownOptions.weeklyHourOptions as any[]).find((option) => option.value == this.lesson.weeklyHour);
    this.displayDialog = true;
  }

  clone(f: LessonModel): LessonModel {
    let lesson = {};
    for (let prop in f) {
      lesson[prop] = f[prop];
    }
    return lesson;
  }

  bolumler() {
    this.displayBolumler = true;
    let targetBolumler: DepartmentModel[] = [];
    let sourceBolumler: DepartmentModel[] = [];

    this.departmentLessonService.getDepartmentsForLessonId(this.selectedLesson.lessonId).subscribe((departments1) => {
      targetBolumler = departments1;
      this.departmentService.getAll().subscribe((departments2) => {
        departments2.map((ls) => {
          let tempA = targetBolumler.filter((opt) => opt.departmentId == ls.departmentId);
          if (tempA.length < 1) {
            sourceBolumler.push(ls);
          }
        });
        this.targetBolumler = targetBolumler;
        this.sourceBolumler = sourceBolumler;
      });
    });
  }

  addDepartmentForLesson(e) {
    for (let i = 0; i < e.items.length; i++) {
      let addModel: AddDepartmentLessonModel = {
        departmentId: e.items[i].departmentId,
        lessonId: this.lesson.lessonId
      };
      this.departmentLessonService.add(addModel).subscribe((res) => {

      });
    }
  }

  deleteDepartmentForLesson(e) {
    for (let i = 0; i < e.items.length; i++) {
      this.departmentLessonService.delete(e.items[i].departmentId, this.lesson.lessonId).subscribe((res) => {
      });
    }
  }


  dersiVerenler() {
    this.displayInstructors = true;
    let targetInstructors: ListUserModel[] = [];
    let sourceInstructors: ListUserModel[] = [];

    this.instructorLessonService.getUsersByLessonId(this.selectedLesson.lessonId).subscribe((users1) => {
      targetInstructors = users1;
      this.authService.getAll().subscribe((users2) => {
        users2.map((ls) => {
          let tempA = targetInstructors.filter((opt) => opt.userId == ls.userId);
          if (tempA.length < 1) {
            sourceInstructors.push(ls);
          }
        });
        this.targetInstructors = targetInstructors;
        this.sourceInstructors = sourceInstructors;
      });
    });
  }


  addUserForLesson(e) {
    for (let i = 0; i < e.items.length; i++) {
      let addModel: AddUserLessonModel = {
        userId: e.items[i].userId,
        lessonId: this.lesson.lessonId
      };
      this.instructorLessonService.add(addModel).subscribe((res) => {

      });
    }
  }

  deleteUserForLesson(e) {
    for (let i = 0; i < e.items.length; i++) {
      this.instructorLessonService.delete(e.items[i].userId, this.lesson.lessonId).subscribe((res) => {
      });
    }
  }


}
