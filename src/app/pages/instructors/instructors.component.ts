import { UserMockService } from './../../mocks/user.mock.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentMockService } from 'src/app/mocks/department.mock.service';
import { FacultyMockService } from 'src/app/mocks';
import { LessonMockService } from 'src/app/mocks/lesson.mock.service';
import { UserModel, AddUserModel } from 'src/app/models/user.model';
import { SelectItem } from 'primeng/primeng';
import { Roles, Titles } from 'src/app/enums';
import { TitlesWord } from 'src/app/enums/titles.enum';

@Component({
  selector: 'dpa-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  public roles = Roles;
  public titles = Titles;
  public titlesWord = TitlesWord;

  users: UserModel[];

  usr: UserModel = {};

  newUser: boolean;

  selectedUser: UserModel;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

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
  }

  selectUser(event: Event, user: UserModel) {
    this.selectedUser = user;
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
    this.usr = {};
    this.displayDialog = true;
  }

  clone(u: UserModel): UserModel {
    let user = {};
    for (let prop in u) {
      user[prop] = u[prop];
    }
    return user;
  }
}
