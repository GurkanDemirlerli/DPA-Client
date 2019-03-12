import { FacultyService } from './../../services/faculty.service';
import { Component, OnInit } from '@angular/core';
import { FacultyModel } from 'src/app/models';
import { AddFacultyModel } from 'src/app/models/add-faculty.model';
import { UpdateFacultyModel } from 'src/app/models/update-faculty.model';

@Component({
  selector: 'dpa-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {

  displayDialog: boolean;

  faculty: FacultyModel = {};

  selectedFaculty: FacultyModel;

  newFaculty: boolean;

  faculties: FacultyModel[];

  cols: any[];

  constructor(private facultyService: FacultyService) { }

  ngOnInit() {
    this.facultyService.getFaculties().subscribe((faculties) => {
      this.faculties = faculties;
    })

    this.cols = [
      { field: 'facultyCode', header: 'Code' },
      { field: 'title', header: 'Title' }
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

}
