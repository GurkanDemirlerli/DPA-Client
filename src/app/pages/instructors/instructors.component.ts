import { InstructorLessonService } from './../../services/instructor-lesson.service';
import { DepartmentService } from './../../services/department.service';
import { AuthService } from 'src/app/services';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import * as _ from 'lodash';

import {
  UserModel,
  AddUserModel,
  UpdateUserModel,
  ListUserModel,
  LessonModel,
  AddUserLessonModel
} from 'src/app/models';
import {
  FacultyMockService,
  DepartmentMockService,
  LessonMockService,
  UserMockService
} from 'src/app/mocks';
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


@Component({
  selector: 'dpa-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  public roles = Roles;
  public rolesWord = RolesWord;
  public titles = Titles;
  public titlesWord = TitlesWord;

  users: ListUserModel[];

  user: any = {};

  newUser: boolean;

  selectedUser: any;

  displayDialog: boolean;

  displayDersler: boolean;

  displayRol: boolean;

  sortOptions: SelectItem[];

  items: MenuItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  dropdownOptions: any = {};

  selectedOptions: any = {};

  sourceDers: LessonModel[] = [];

  targetDers: LessonModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private lessonService: LessonService,
    private instructorLessonService: InstructorLessonService,
    private userService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      // users.map(user => {
      //   this.departmentService.get(user.departmanId).subscribe(department => {
      //     user.departman = department;
      //   })
      // })
    });

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];

    this.items = [
      { label: 'Adil Çizelgeleme Sistemi' },
      { label: 'Kullanıcılar' },
    ];

    this.fillDropdownOptions();
  }

  fillDropdownOptions() {
    this.dropdownOptions.roleTypeOptions = roleTypeOptions;
    this.dropdownOptions.titleTypeOptions = titleTypeOptions;
    this.dropdownOptions.departmanOptions = [];
    let departmanOptions = [];
    this.departmentService.getAll().subscribe((departmans) => {
      departmans.map((departman) => {
        departmanOptions.push({
          "name": departman.title,
          "code": departman.departmanId
        });
      });
      this.dropdownOptions.departmanOptions = departmanOptions;
    })
  }

  selectUser(event: Event, user: ListUserModel) {
    this.selectedUser = user;
    this.newUser = false;
    this.selectedOptions.roleTypeOptions = (this.dropdownOptions.roleTypeOptions as any[]).find((option) => option.code == this.selectedUser.roles);
    this.selectedOptions.titleTypeOptions = (this.dropdownOptions.titleTypeOptions as any[]).find((option) => option.code == this.selectedUser.title);
    this.selectedOptions.departmanOptions = (this.dropdownOptions.departmanOptions as any[]).find((option) => option.code == this.selectedUser.departmanId);
    this.user = user;
    this.displayDialog = true;
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
    console.log(this.selectUser);
  }

  showDialogToAdd() {
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
        // departmanId: this.user.departmanId
      }
      this.userService.add(addUserModel).subscribe((res) => {
        // this.departmentService.get(this.user.departmanId).subscribe(department => {
        //   this.user.departman = department;
        this.user.userId = res.data;
        users.push(this.user);
        this.users = users;
        this.user = null;
        this.displayDialog = false;
        // })
      }, (err) => {
        console.log(err);
      }, () => {

      });
    } else {
      let updateUserModel: UpdateUserModel = {
        // login: this.user.name,
        // password: this.user.password,
        name: this.user.name,
        surname: this.user.surname,
        email: this.user.email,
        roles: this.user.roles,
        title: this.user.title,
        // departmanId: this.user.departmanId
      }
      let id = this.user.userId;
      this.userService.update(updateUserModel, id).subscribe(() => {
        users[this.users.indexOf(this.selectedUser)] = this.user;
        this.users = users;
        this.user = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
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
    }, (err) => {
      console.log(err);
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
        console.log("Beklenen sonuç:", res);
      });
    }
  }

}
