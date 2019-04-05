import { ListUserModel } from './../../models/list-user.model';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from './../../services/department.service';
import { InstructorLessonService } from './../../services/instructor-lesson.service';
import { DepartmentLessonService } from './../../services/department-lesson.service';
import { LessonService } from './../../services/lesson.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmanModel } from 'src/app/models/departman.model';
import { MenuItem, SelectItem } from 'primeng/api';




import {
  FacultyModel,
  LessonModel,
  UpdateLessonModel,
  AddLessonModel,
  AddDepartmentLessonModel,
  UserModel,
  AddUserLessonModel
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

  displayBolumler: boolean;
  targetBolumler: DepartmanModel[] = [];
  sourceBolumler: DepartmanModel[] = [];

  displayInstructors: boolean;
  targetInstructors: ListUserModel[] = [];
  sourceInstructors: ListUserModel[] = [];


  filters: { departmans: SelectItem[] } = {
    departmans: []
  };

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private departmentLessonService: DepartmentLessonService,
    private instructorLessonService: InstructorLessonService,
    private lessonService: LessonService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.lessonService.getAll().subscribe((lessons) => {
      // lessons.map((lesson) => {
      //   this.departmentService.get(lesson.departmanId).subscribe((departman) => {
      //     lesson.departman = departman;
      //   });
      // });

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

  bolumler() {
    this.displayBolumler = true;
    let targetBolumler: DepartmanModel[] = [];
    let sourceBolumler: DepartmanModel[] = [];

    this.departmentLessonService.getDepartmentsForLessonId(this.selectedLesson.lessonId).subscribe((departments1) => {
      targetBolumler = departments1;
      this.departmentService.getAll().subscribe((departments2) => {
        departments2.map((ls) => {
          let tempA = targetBolumler.filter((opt) => opt.departmanId == ls.departmanId);
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
        departmanId: e.items[i].departmanId,
        lessonId: this.lesson.lessonId
      };
      this.departmentLessonService.add(addModel).subscribe((res) => {

      });
    }
  }

  deleteDepartmentForLesson(e) {
    for (let i = 0; i < e.items.length; i++) {
      this.departmentLessonService.delete(e.items[i].departmanId, this.lesson.lessonId).subscribe((res) => {
        console.log("Beklenen sonuç:", res);
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
        console.log("Beklenen sonuç:", res);
      });
    }
  }


}
