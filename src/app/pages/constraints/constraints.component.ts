import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {
  ConstraintModel,
  AddConstraintModel,
  UpdateConstraintModel
} from 'src/app/models';

import {
  EducationTypesTableView,
  EducationTypes,
  Roles
} from 'src/app/enums';
import {
  weeklyHourOptions,
  educationTypeOptions,
  saatOptions
} from './dropdown.data';
import { ConstraintService } from 'src/app/services/constraint.service';
import { TokenModel } from 'src/app/models/token.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'dpa-constraints',
  templateUrl: './constraints.component.html',
  styleUrls: ['./constraints.component.scss']
})
export class ConstraintsComponent implements OnInit {

  mform = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    isFreeDay: new FormControl('', Validators.required),
    weeklyHour: new FormControl('', Validators.required),
    educationType: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
  });

  public educationTypesTableView = EducationTypesTableView;
  public educationTypes = EducationTypes;

  displayDialog: boolean;

  constraint: ConstraintModel = {};

  selectedConstraint: ConstraintModel;

  newConstraint: boolean;

  constraints: ConstraintModel[] = [];

  cols: any[];

  items: MenuItem[];

  canAdd: boolean = false;

  dropdownOptions: any = {};

  selectedOptions: any = {};

  checkboxes: any = {
    isFreeDay: false,
    isActive: false
  };

  loading: boolean = true;

  constructor(
    private constraintService: ConstraintService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.constraintService.getAll().subscribe((constraints) => {
      this.canAdd = true;
      constraints.map((cs) => {
        if (cs.userId === this.authService.userInfo.userId) {
          this.canAdd = false;
        }
        if (this.authService.userInfo.roles === Roles.User) {
          if (cs.userId === this.authService.userInfo.userId) {
            this.constraints.push(cs);
          }
        } else {
          this.constraints.push(cs);
        }
      });

      this.constraints.map((cs) => {
        this.authService.get(cs.userId).subscribe((us) => {
          cs.userName = us.name + ' ' + us.surname
        });
      });

      this.loading = false;
    });

    this.cols = [
      { field: 'title', header: 'Kısıt Adı' },
      { field: 'description', header: 'Açıklama' },
      { field: 'isFreeDay', header: 'Boş Gün' },
      { field: 'isActive', header: 'Aktiflik' },
      { field: 'weeklyHour', header: 'Haftalık Saat' },
      { field: 'educationType', header: 'Öğrenim Türü' },
      { field: 'startTime', header: 'Başlangıç saati' },
      { field: 'endTime', header: 'Bitiş saati' },
      { field: 'userId', header: 'Oluşturan', hlpr: "userName" },
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
    this.dropdownOptions.saatOptions = saatOptions;
  }


  showDialogToAdd() {
    this.newConstraint = true;
    this.constraint = {};
    this.selectedOptions = {};
    this.displayDialog = true;
    this.constraint.isActive = false;
    this.constraint.isFreeDay = false;
  }


  save(e) {

    let constraints = [...this.constraints];
    if (this.newConstraint) {
      const helper = new JwtHelperService();
      const token = localStorage.getItem('token');
      const decoded: TokenModel = helper.decodeToken(token);
      const userId = Number(decoded.sub);
      this.constraint.userId = userId;

      let addConstraintModel: AddConstraintModel = {
        startTime: this.constraint.startTime,
        endTime: this.constraint.endTime,
        title: this.constraint.title,
        description: this.constraint.description,
        isFreeDay: this.constraint.isFreeDay,
        isActive: true,
        weeklyHour: this.constraint.weeklyHour,
        educationType: this.constraint.educationType,
        userId: userId
      }
      this.constraintService.add(addConstraintModel).subscribe((res) => {
        this.constraint.constraintId = res.data;
        constraints.push(this.constraint);
        this.constraints = constraints;
        this.constraint = null;
        this.displayDialog = false;
        this.toastr.success('Kısıt Başarıyla Eklendi', 'Başarılı');
        this.canAdd = false;
      }, (err) => {
        console.log(err);
        this.toastr.error("Kısıt eklenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {
      });
    } else {
      let updateConstraintModel: UpdateConstraintModel = {
        startTime: this.constraint.startTime,
        endTime: this.constraint.endTime,
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
        this.toastr.success('Kısıt Başarıyla Güncellendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Kısıt güncellenirken bir hata oluştu", "Sunucu Hatası");
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
      this.toastr.success('Kısıt Başarıyla Silindi', 'Başarılı');
      this.canAdd = true;
    }, (err) => {
      console.log(err);
      this.toastr.error("Kısıt silinirken bir hata oluştu", "Sunucu Hatası");
    }, () => {
    });
  }

  inspect() {
    console.log(this.mform);
  }

  onRowSelect(event) {
    this.newConstraint = false;
    this.constraint = this.clone(event.data);
    this.checkboxes.isFreeDay = this.constraint.isFreeDay;
    this.checkboxes.isActive = this.constraint.isActive;
    this.selectedOptions.educationTypeOptions = (this.dropdownOptions.educationTypeOptions as any[]).find((option) => option.value == this.constraint.educationType);
    this.selectedOptions.weeklyHourOptions = (this.dropdownOptions.weeklyHourOptions as any[]).find((option) => option.value == this.constraint.weeklyHour);
    this.selectedOptions.startTimeOptions = (this.dropdownOptions.saatOptions as any[]).find((option) => option.value == this.constraint.startTime);
    this.selectedOptions.endTimeOptions = (this.dropdownOptions.saatOptions as any[]).find((option) => option.value == this.constraint.endTime);
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
