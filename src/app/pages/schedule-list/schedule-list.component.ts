import { AddSyllabusModel } from './../../models/schedule.model';
import { DepartmentModel } from './../../models/department.model';
import { ListUserModel } from './../../models/list-user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SyllabusService } from 'src/app/services/syllabus.service';
import { SyllabusModel } from './../../models/syllabus.model';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentInstructorService } from 'src/app/services/department-instructor.service';
import { Router } from '@angular/router';
import { PeriodEnum, PeriodReverseEnum } from 'src/app/enums/period.enum';
import { EducationTypes, EducationTypesTableView } from 'src/app/enums';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { periodTypeOptions, educationTypeOptions } from './dropdown.data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dpa-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  mform = new FormGroup({
    periodType: new FormControl('', Validators.required),
    educationType: new FormControl('', Validators.required),
  });

  public periodEnum = PeriodEnum;
  public periodReverseEnum = PeriodReverseEnum;

  public educationEnum = EducationTypes;
  public educationReverseEnum = EducationTypesTableView;

  items: SyllabusModel[];

  cols: any[];

  brItems: MenuItem[];

  selectedSyl: SyllabusModel;

  displayDialog: boolean;

  dropdownOptions: any = {};

  newItem: AddSyllabusModel = {};

  department: DepartmentModel;

  loading = true;

  addLoading = false;
  constructor(
    private authService: AuthService,
    private syllabusService: SyllabusService,
    private departmentInstructorService: DepartmentInstructorService,
    private departmentService: DepartmentService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.departmentInstructorService.getDepartmentsForUserId(this.authService.userInfo.userId).subscribe((department) => {
      this.department = department[0];
      this.syllabusService.getForDepartment(department[0].departmentId).subscribe((syls) => {
        this.items = syls;
        this.loading = false;
        this.items.map((syl) => {
          syl.isActive = false;
          if (syl.educationType === EducationTypes.IIOgretim) {
            if (syl.syllabusId === this.department.secondActiveSyllabusId) {
              syl.isActive = true;
            }
          } else if (syl.educationType === EducationTypes.IOgretim) {
            if (syl.syllabusId === this.department.firstActiveSyllabusId) {
              syl.isActive = true;
            }
          }
        });
      });
    });

    this.cols = [
      { field: 'syllabusId', header: 'ID' },
      { field: 'year', header: 'Yıl' },
      { field: 'periodType', header: 'Dönem' },
      { field: 'educationType', header: 'Öğrenim Türü' },
      { field: 'weeklyHour', header: 'Haftalık Saat' },
      { field: 'isActive', header: 'Aktiflik' },
      { field: 'syllabusId', header: 'Aktiflestir', hlpr: 'educationType', hlpr2: 'isActive' },
    ];

    this.brItems = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages'] },
      { label: 'Bölüm Ders Programları' },
    ];

    this.fillDropdownOptions();
  }

  fillDropdownOptions() {
    this.dropdownOptions.periodTypeOptions = periodTypeOptions;
    this.dropdownOptions.educationTypeOptions = educationTypeOptions;

  }
  makeActive(id: number, edType: number) {
    if (edType === EducationTypes.IOgretim) {
      this.departmentService.setFirstSchedule(this.department.departmentId, id).subscribe(() => {
        this.items.map((syl) => {
          if (syl.syllabusId === id) {
            syl.isActive = true;
          } else if (syl.isActive && syl.educationType === EducationTypes.IOgretim) {
            syl.isActive = false;
          }
        });
        this.toastr.success('Program Başarıyla Aktifleştirildi', 'Başarılı');
      }, (err) => {
        this.toastr.error("Program aktif edilirken bir hata oluştu", "Sunucu Hatası");
      });
    } else if (edType === EducationTypes.IIOgretim) {
      this.departmentService.setSecondSchedule(this.department.departmentId, id).subscribe(() => {
        this.items.map((syl) => {
          if (syl.syllabusId === id) {
            syl.isActive = true;
          } else if (syl.isActive && syl.educationType === EducationTypes.IIOgretim) {
            syl.isActive = false;
          }
        });
        this.toastr.success('Program Başarıyla Aktifleştirildi', 'Başarılı');
      }, (err) => {
        this.toastr.error("Program aktif edilirken bir hata oluştu", "Sunucu Hatası");
      });

    }
    console.log(id);
    console.log(edType);
  }

  onRowSelect(event) {
    if (this.selectedSyl.educationType === EducationTypes.IOgretim) {
      this.syllabusService.selectedFirst = this.selectedSyl;
      this.syllabusService.selectedSecond = null;
    } else {
      this.syllabusService.selectedFirst = null;
      this.syllabusService.selectedSecond = this.selectedSyl;
    }
    this.router.navigate(['pages/schedule']);
  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

  aktifProgramaGit() {
    let syl1 = null, syl2 = null;
    this.items.map((syl) => {
      if (syl.isActive && syl.educationType === EducationTypes.IOgretim) {
        syl1 = syl;
      } else if (syl.isActive && syl.educationType === EducationTypes.IIOgretim) {
        syl2 = syl;
      }
    });
    this.syllabusService.selectedFirst = syl1;
    this.syllabusService.selectedSecond = syl2;

    this.router.navigate(['pages/schedule']);
  }

  save() {
    this.newItem.departmentId = this.department.departmentId;
    this.newItem.facultyId = this.department.facultyId;
    this.syllabusService.add(this.newItem).subscribe((syl) => {

      this.items.push(syl);
      this.toastr.success('Program Başarıyla Oluşturuldu', 'Başarılı');
      this.displayDialog = false;
      this.addLoading = false;

    }, (err) => {
      this.toastr.error("Program oluşturulurken bir hata oluştu", "Sunucu Hatası");
      this.displayDialog = false;
      this.addLoading = false;

    });
    this.toastr.info("Program oluşturuluyor lütfen bekleyiniz", "Bilgilendirme");
    this.addLoading = true;

  }
}
