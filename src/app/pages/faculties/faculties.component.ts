import { FacultyService } from './../../services/faculty.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


import {
  FacultyModel,
  UpdateFacultyModel,
  AddFacultyModel
} from 'src/app/models';

import {
  FacultyMockService,
} from 'src/app/mocks';


@Component({
  selector: 'dpa-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class FacultiesComponent implements OnInit {

  displayDialog: boolean;

  faculty: FacultyModel = {};

  selectedFaculty: FacultyModel;

  newFaculty: boolean;

  faculties: FacultyModel[];

  cols: any[];

  items: MenuItem[];

  constructor(private facultyService: FacultyService, private router: Router) { }

  ngOnInit() {
    this.facultyService.getAll().subscribe((faculties) => {
      this.faculties = faculties;
    })

    this.cols = [
      { field: 'facultyCode', header: 'Code', width: '20%' },
      { field: 'title', header: 'Title', width: '80%' }
    ];

    this.items = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages/faculties'] },
      { label: 'Fakülteler', routerLink: ['/pages/faculties'] },
    ];
  }

  showDialogToAdd() {
    this.newFaculty = true;
    this.faculty = {};
    this.displayDialog = true;
  }

  save() {
    let faculties = [...this.faculties];
    if (this.newFaculty) {
      let addFacultyModel: AddFacultyModel = {
        title: this.faculty.title,
        facultyCode: this.faculty.facultyCode
      }
      this.facultyService.add(addFacultyModel).subscribe(() => {
        faculties.push(this.faculty);
        this.faculties = faculties;
        this.faculty = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    } else {
      console.log(this.faculty);
      let updateFacultyModel: UpdateFacultyModel = {
        title: this.faculty.title,
        facultyCode: this.faculty.facultyCode
      }
      let id = this.faculty.facultyId;
      this.facultyService.update(updateFacultyModel, id).subscribe(() => {
        faculties[this.faculties.indexOf(this.selectedFaculty)] = this.faculty;
        this.faculties = faculties;
        this.faculty = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    }

  }

  delete() {
    this.facultyService.delete(this.selectedFaculty.facultyId).subscribe(() => {
      let index = this.faculties.indexOf(this.selectedFaculty);
      this.faculties = this.faculties.filter((val, i) => i != index);
      this.faculty = null;
      this.displayDialog = false;
    }, (err) => {
      console.log(err);
    }, () => {

    });
  }

  onRowSelect(event) {
    this.newFaculty = false;
    this.faculty = this.cloneFaculty(event.data);
    this.displayDialog = true;
  }

  cloneFaculty(f: FacultyModel): FacultyModel {
    let faculty = {};
    for (let prop in f) {
      faculty[prop] = f[prop];
    }
    return faculty;
  }

  goToDepartments() {
    this.router.navigate(['pages/departments', this.faculty.facultyId]);
  }

}
