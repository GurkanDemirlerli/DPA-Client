import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';


import {
  ConstraintModel,
  AddConstraintModel,
  UpdateConstraintModel
} from 'src/app/models';
import {
  FacultyMockService,
  ConstraintMockService,
  DepartmentMockService,
  LessonMockService
} from 'src/app/mocks';
import {
  EducationTypesTableView,
  EducationTypes
} from 'src/app/enums';
import {
  weeklyHourOptions,
  educationTypeOptions
} from './dropdown.data';
import { ConstraintService } from 'src/app/services/constraint.service';



@Component({
  selector: 'dpa-constraints',
  templateUrl: './constraints.component.html',
  styleUrls: ['./constraints.component.scss']
})
export class ConstraintsComponent implements OnInit {

  public educationTypesTableView = EducationTypesTableView;
  public educationTypes = EducationTypes;

  displayDialog: boolean;

  constraint: ConstraintModel = {};

  selectedConstraint: ConstraintModel;

  newConstraint: boolean;

  constraints: ConstraintModel[];

  cols: any[];

  items: MenuItem[];


  dropdownOptions: any = {};

  selectedOptions: any = {};

  checkboxes: any = {
    isFreeDay: false,
    isActive: false
  };

  constructor(
    private constraintService: ConstraintService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.constraintService.getAll().subscribe((constraints) => {
      this.constraints = constraints;
    })

    this.cols = [
      { field: 'title', header: 'Kısıt Adı' },
      { field: 'description', header: 'Açıklama' },
      { field: 'isFreeDay', header: 'Boş Gün' },
      { field: 'isActive', header: 'Aktiflik' },
      { field: 'weeklyHour', header: 'Haftalık Saat' },
      { field: 'educationType', header: 'Öğrenim Türü' },
      { field: 'userId', header: 'Oluşturan' },
    ];

    this.items = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages/faculties'] },
      { label: 'Kısıtlar', routerLink: ['/pages/faculties'] },
    ];

    this.fillDropdownOptions();
  }

  fillDropdownOptions() {
    this.dropdownOptions.weeklyHourOptions = weeklyHourOptions;
    this.dropdownOptions.educationTypeOptions = educationTypeOptions;
  }


  showDialogToAdd() {
    this.newConstraint = true;
    this.constraint = {};
    this.selectedOptions = {};
    this.displayDialog = true;
    this.constraint.isActive = false;
    this.constraint.isFreeDay = false;
  }


  save() {
    console.log(this.constraint);
    this.constraint.userId = 2;
    let constraints = [...this.constraints];
    if (this.newConstraint) {
      let addConstraintModel: AddConstraintModel = {
        title: this.constraint.title,
        description: this.constraint.description,
        isFreeDay: this.constraint.isFreeDay,
        isActive: this.constraint.isActive,
        weeklyHour: this.constraint.weeklyHour,
        educationType: this.constraint.educationType,
        userId: this.constraint.userId
      }
      this.constraintService.add(addConstraintModel).subscribe((res) => {
        this.constraint.constraintId = res.data;
        constraints.push(this.constraint);
        this.constraints = constraints;
        this.constraint = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    } else {
      console.log(this.constraint);
      let updateConstraintModel: UpdateConstraintModel = {
        title: this.constraint.title,
        description: this.constraint.description,
        isFreeDay: this.constraint.isFreeDay,
        isActive: this.constraint.isActive,
        weeklyHour: this.constraint.weeklyHour,
        educationType: this.constraint.educationType,
        userId: this.constraint.userId
      }
      let id = this.constraint.constraintId;
      this.constraintService.update(updateConstraintModel, id).subscribe(() => {
        constraints[this.constraints.indexOf(this.selectedConstraint)] = this.constraint;
        this.constraints = constraints;
        this.constraint = null;
        this.displayDialog = false;
      }, (err) => {
        console.log(err);
      }, () => {

      });
    }

  }

  delete() {
    this.constraintService.delete(this.selectedConstraint.constraintId).subscribe(() => {
      let index = this.constraints.indexOf(this.selectedConstraint);
      this.constraints = this.constraints.filter((val, i) => i != index);
      this.constraint = null;
      this.displayDialog = false;
    }, (err) => {
      console.log(err);
    }, () => {

    });
  }

  onRowSelect(event) {
    this.newConstraint = false;
    this.constraint = this.clone(event.data);
    this.checkboxes.isFreeDay = false;
    this.checkboxes.isActive = false;
    this.selectedOptions.educationTypeOptions = (this.dropdownOptions.educationTypeOptions as any[]).find((option) => option.code == this.constraint.educationType);
    this.selectedOptions.weeklyHourOptions = (this.dropdownOptions.weeklyHourOptions as any[]).find((option) => option.code == this.constraint.weeklyHour);
    this.displayDialog = true;
  }

  clone(f: ConstraintModel): ConstraintModel {
    let constraint = {};
    for (let prop in f) {
      constraint[prop] = f[prop];
    }
    return constraint;
  }


}
