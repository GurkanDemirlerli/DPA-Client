import { AuthService } from 'src/app/services/auth.service';
import { SyllabusService } from 'src/app/services/syllabus.service';
import { SyllabusModel } from './../../models/syllabus.model';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentInstructorService } from 'src/app/services/department-instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dpa-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  items: SyllabusModel[];

  cols: any[];

  brItems: MenuItem[];

  selectedSyl: SyllabusModel;

  constructor(
    private authService: AuthService,
    private syllabusService: SyllabusService,
    private departmentInstructorService: DepartmentInstructorService,
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.departmentInstructorService.getDepartmentsForUserId(this.authService.userInfo.userId).subscribe((department) => {
      this.syllabusService.getForDepartment(department[0].departmentId).subscribe((syls) => {
        this.items = syls;
        console.log(this.items);
      });
    });

    this.cols = [
      { field: 'syllabusId', header: 'ID' },
      { field: 'year', header: 'Yıl' },
      { field: 'periodType', header: 'Dönem' },
      { field: 'educationType', header: 'Öğrenim Türü' },
      { field: 'weeklyHour', header: 'Haftalık Saat' },
      { field: 'isActive', header: 'Aktiflik' },
    ];

    this.brItems = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages'] },
      { label: 'Bölüm Ders Programları' },
    ];

  }

  onRowSelect(event) {
    this.syllabusService.selected = this.selectedSyl;
    this.router.navigate(['pages/schedule']);
    console.log("Verileri parametre olarak ver Programın detayına git");
  }

}
