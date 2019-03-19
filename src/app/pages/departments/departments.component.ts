import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';



import {
  FacultyModel,
  AddDepartmanModel,
  UpdateDepartmanModel,
  DepartmanModel
} from 'src/app/models';
import {
  FacultyMockService,
  DepartmentMockService
} from 'src/app/mocks';


@Component({
  selector: 'dpa-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  facultyId: number;
  faculty: FacultyModel;



  displayDialog: boolean;

  department: DepartmanModel = {};

  selectedDepartment: DepartmanModel;

  newDepartment: boolean;

  departments: DepartmanModel[];

  cols: any[];

  items: MenuItem[];

  constructor(
    private route: ActivatedRoute,
    private facultyService: FacultyMockService,
    private departmentService: DepartmentMockService,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.facultyId = params["facultyId"]);
  }

  ngOnInit() {
    this.facultyService.get(this.facultyId).subscribe(faculty => this.faculty = faculty);

    this.departmentService.getDepartmentsForFaculty(this.facultyId).subscribe((departments) => {
      this.departments = departments;
    })

    this.cols = [
      { field: 'departmanCode', header: 'Kodu', width: '20%' },
      { field: 'title', header: 'Adı', width: '80%' }
    ];

    this.items = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages/faculties'] },
      { label: 'Fakülteler', routerLink: ['/pages/faculties'] },
      { label: this.faculty.title },
      { label: 'Bölümler', routerLink: ['/pages/departments'] }
    ];
  }


  showDialogToAdd() {
    this.newDepartment = true;
    this.department = {};
    this.displayDialog = true;
  }

  save() {
    let departments = [...this.departments];
    if (this.newDepartment) {
      let addDepartmanModel: AddDepartmanModel = {
        title: this.department.title,
        departmanCode: this.department.departmanCode,
        facultyId: this.facultyId
      }
      this.departmentService.add(addDepartmanModel).subscribe(() => {
        departments.push(this.department);
        this.departments = departments;
        this.department = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    } else {
      console.log(this.department);
      let updateDepartmanModel: UpdateDepartmanModel = {
        title: this.department.title,
        departmanCode: this.department.departmanCode,
        facultyId: this.facultyId
      }
      let id = this.department.departmanId;
      this.departmentService.update(updateDepartmanModel, id).subscribe(() => {
        departments[this.departments.indexOf(this.selectedDepartment)] = this.department;
        this.departments = departments;
        this.department = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    }

  }

  delete() {
    this.departmentService.delete(this.selectedDepartment.departmanId).subscribe(() => {
      let index = this.departments.indexOf(this.selectedDepartment);
      this.departments = this.departments.filter((val, i) => i != index);
      this.department = null;
      this.displayDialog = false;
    }, (err) => {
      console.log(err);
    }, () => {

    });
  }

  onRowSelect(event) {
    this.newDepartment = false;
    this.department = this.clone(event.data);
    this.displayDialog = true;
  }

  clone(f: DepartmanModel): DepartmanModel {
    let department = {};
    for (let prop in f) {
      department[prop] = f[prop];
    }
    return department;
  }

  goToLessons() {
    this.router.navigate(['pages/lessons', this.selectedDepartment.departmanId]);
  }

}
