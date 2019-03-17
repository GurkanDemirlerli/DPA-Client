import { UserMockService } from './../../mocks/user.mock.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentMockService } from 'src/app/mocks/department.mock.service';
import { FacultyMockService } from 'src/app/mocks';
import { LessonMockService } from 'src/app/mocks/lesson.mock.service';
import { UserModel, AddUserModel, UpdateUserModel } from 'src/app/models/user.model';
import { SelectItem } from 'primeng/primeng';
import { Roles, Titles } from 'src/app/enums';
import { TitlesWord } from 'src/app/enums/titles.enum';
import { RolesWord } from 'src/app/enums/roles.enum';
import { roleTypeOptions, titleTypeOptions } from './dropdown.data';

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

  users: UserModel[];

  user: UserModel = {};

  newUser: boolean;

  selectedUser: UserModel;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  dropdownOptions: any = {};

  selectedOptions: any = {};

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentMockService,
    private facultyService: FacultyMockService,
    private lessonService: LessonMockService,
    private userService: UserMockService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      users.map(user => {
        this.departmentService.get(user.departmanId).subscribe(department => {
          user.departman = department;
        })
      })
    });

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
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

  selectUser(event: Event, user: UserModel) {
    this.selectedUser = user;
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

  clone(u: UserModel): UserModel {
    let user = {};
    for (let prop in u) {
      user[prop] = u[prop];
    }
    return user;
  }

  save() {
    console.log(this.user);
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
        departmanId: this.user.departmanId
      }
      this.userService.add(addUserModel).subscribe(() => {
        this.departmentService.get(this.user.departmanId).subscribe(department => {
          this.user.departman = department;
          users.push(this.user);
          this.users = users;
          this.user = null;
          this.displayDialog = false;
        })
      }, (err) => {
        console.log(err);
      }, () => {

      });
    } else {
      console.log(this.user);
      let updateUserModel: UpdateUserModel = {
        login: this.user.name,
        password: this.user.password,
        name: this.user.name,
        surname: this.user.surname,
        email: this.user.email,
        roles: this.user.roles,
        title: this.user.title,
        departmanId: this.user.departmanId
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
    this.lessonService.delete(this.selectedUser.userId).subscribe(() => {
      let index = this.users.indexOf(this.selectedUser);
      this.users = this.users.filter((val, i) => i != index);
      this.user = null;
      this.displayDialog = false;
    }, (err) => {
      console.log(err);
    }, () => {

    });
  }

}
