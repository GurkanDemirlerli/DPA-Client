import { AddDepartmentInstructorModel } from './../../models/add-department-instructor.model';
import { DepartmentInstructorService } from './../../services/department-instructor.service';
import { InstructorLessonService } from './../../services/instructor-lesson.service';
import { DepartmentService } from './../../services/department.service';
import { AuthService } from 'src/app/services';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import {
  AddUserModel,
  UpdateUserModel,
  ListUserModel,
  LessonModel,
  AddUserLessonModel,
  DepartmentModel
} from 'src/app/models';

import {
  Roles,
  Titles,
  TitlesWord,
  RolesWord
} from 'src/app/enums';
import {
  roleTypeOptions,
  titleTypeOptions
} from './dropdown.data';
import { LessonService } from 'src/app/services/lesson.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'dpa-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {


  mform = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  });

  public roles = Roles;
  public rolesWord = RolesWord;
  public titles = Titles;
  public titlesWord = TitlesWord;

  users: ListUserModel[] = [];

  user: any = {};

  newUser: boolean;

  selectedUser: any;

  displayDialog: boolean;


  displayRol: boolean;

  sortOptions: SelectItem[];

  items: MenuItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  dropdownOptions: any = {};

  selectedOptions: any = {};

  displayDersler: boolean;
  sourceDers: LessonModel[] = [];
  targetDers: LessonModel[] = [];

  displayBolumler: boolean;
  targetBolumler: DepartmentModel[] = [];
  sourceBolumler: DepartmentModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private departmentInstructorService: DepartmentInstructorService,
    private lessonService: LessonService,
    private instructorLessonService: InstructorLessonService,
    private userService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  dad(e) {
    console.log(e);
  }
  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      users.map((us) => {
        this.departmentInstructorService.getDepartmentsForUserId(us.userId).subscribe((departments) => {
          us.departments = [];
          us.departments = departments;
          us.departmentsParsed = "";
          departments.map((dp) => {
            us.departmentsParsed = us.departmentsParsed + dp.title;
          })
          this.users.push(us);
        })
      })
    });

    this.items = [
      { label: 'Adil Çizelgeleme Sistemi' },
      { label: 'Kullanıcılar' },
    ];

    this.fillDropdownOptions();
  }

  fillDropdownOptions() {
    this.dropdownOptions.roleTypeOptions = roleTypeOptions;
    this.dropdownOptions.titleTypeOptions = titleTypeOptions;
    this.dropdownOptions.departmentOptions = [];
    let departmentOptions = [];
    this.departmentService.getAll().subscribe((departments) => {
      departments.map((department) => {
        departmentOptions.push({
          "label": department.title,
          "value": department.departmentId
        });
      });
      this.dropdownOptions.departmentOptions = departmentOptions;
      this.dropdownOptions.bolumFilter = departmentOptions;

    });
  }

  selectUser(event: Event, user: ListUserModel) {
    this.selectedUser = user;
    this.newUser = false;
    this.selectedOptions.roleTypeOptions = (this.dropdownOptions.roleTypeOptions as any[]).find((option) => option.value == this.selectedUser.roles);
    this.selectedOptions.titleTypeOptions = (this.dropdownOptions.titleTypeOptions as any[]).find((option) => option.value == this.selectedUser.title);
    this.selectedOptions.departmentOptions = (this.dropdownOptions.departmentOptions as any[]).find((option) => option.value == this.selectedUser.departmentId);
    this.user = user;
    this.displayDialog = true;

    this.mform = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      roles: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
    });
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  close() {
    this.selectedUser = null;
  }

  showDialogToAdd() {
    this.mform = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      roles: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
    });

    this.selectedUser = null;

    this.newUser = true;
    this.selectedOptions = {};
    this.user = {};
    this.displayDialog = true;
  }

  clone(u: ListUserModel): ListUserModel {
    let user = {};
    for (let prop in u) {
      user[prop] = u[prop];
    }
    return user;
  }

  save() {
    let users = [...this.users];
    if (this.newUser) {
      let addUserModel: AddUserModel = {
        login: this.user.name,
        password: this.user.password,
        name: this.user.name,
        surname: this.user.surname,
        email: this.user.email,
        roles: this.user.roles,
        title: this.user.title,
      }
      this.userService.add(addUserModel).subscribe((res) => {
        this.user.userId = res.data;
        users.push(this.user);
        this.users = users;
        this.user = null;
        this.displayDialog = false;
        this.toastr.success('Kullanıcı Başarıyla Eklendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Kullanıcı eklenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    } else {
      let updateUserModel: UpdateUserModel = {
        name: this.user.name,
        surname: this.user.surname,
        email: this.user.email,
        roles: this.user.roles,
        title: this.user.title,
      }
      let id = this.user.userId;
      this.userService.update(updateUserModel, id).subscribe(() => {
        users[this.users.indexOf(this.selectedUser)] = this.user;
        this.users = users;
        this.user = null;
        this.displayDialog = false;
        this.toastr.success('Kullanıcı Başarıyla Güncellendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Kullanıcı güncellenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    }

  }

  delete() {
    this.userService.delete(this.selectedUser.userId).subscribe(() => {
      let index = this.users.indexOf(this.selectedUser);
      this.users = this.users.filter((val, i) => i != index);
      this.user = null;
      this.displayDialog = false;
      this.toastr.success('Kullanıcı Başarıyla Silindi', 'Başarılı');
    }, (err) => {
      console.log(err);
      this.toastr.error("Kullanıcı silinirken bir hata oluştu", "Sunucu Hatası");

    }, () => {

    });
  }


  dersler() {
    this.displayDersler = true;
    let targetDers: LessonModel[] = [];
    let sourceDers: LessonModel[] = [];

    this.instructorLessonService.getLessonsByUserId(this.selectedUser.userId).subscribe((lessons1) => {
      targetDers = lessons1;
      this.lessonService.getAll().subscribe((lessons2) => {
        lessons2.map((ls) => {
          let tempA = targetDers.filter((opt) => opt.lessonId == ls.lessonId);
          if (tempA.length < 1) {
            sourceDers.push(ls);
          }
        });
        this.targetDers = targetDers;
        this.sourceDers = sourceDers;
      });
    });
  }

  bolumler() {
    this.displayBolumler = true;
    let targetBolumler: DepartmentModel[] = [];
    let sourceBolumler: DepartmentModel[] = [];

    this.departmentInstructorService.getDepartmentsForUserId(this.selectedUser.userId).subscribe((departments1) => {
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

  rol() {
    this.displayRol = true;
  }

  addLessonForUser(e) {
    for (let i = 0; i < e.items.length; i++) {
      let addModel: AddUserLessonModel = {
        userId: this.user.userId,
        lessonId: e.items[i].lessonId
      };
      this.instructorLessonService.add(addModel).subscribe((res) => {

      });
    }
  }

  deleteLessonForUser(e) {
    for (let i = 0; i < e.items.length; i++) {
      this.instructorLessonService.delete(this.user.userId, e.items[i].lessonId).subscribe((res) => {
      });
    }
  }


  addDepartmentForUser(e) {
    for (let i = 0; i < e.items.length; i++) {
      let addModel: AddDepartmentInstructorModel = {
        departmentId: e.items[i].departmentId,
        userId: this.user.userId
      };
      this.departmentInstructorService.add(addModel).subscribe((res) => {
        this.toastr.success('Kullanıcı Başarıyla Bölüm Atandı.', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Kullanıcıya bölüm atanırken bir hata oluştu", "Sunucu Hatası");
      });
    }
  }

  deleteDepartmentForUser(e) {
    for (let i = 0; i < e.items.length; i++) {
      this.departmentInstructorService.delete(e.items[i].departmentId, this.user.userId.lessonId).subscribe((res) => {
        this.toastr.success('Kullanıcı Başarıyla Bölümden silindi.', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Kullanıcıya bölümden silinirken bir hata oluştu", "Sunucu Hatası");
      });
    }
  }

}
