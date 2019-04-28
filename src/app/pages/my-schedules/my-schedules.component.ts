import { DepartmentModel } from 'src/app/models/department.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';
import { SyllabusService } from 'src/app/services/syllabus.service';
import { DepartmentInstructorService } from 'src/app/services/department-instructor.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';
import { SyllabusModel } from 'src/app/models/syllabus.model';

@Component({
  selector: 'dpa-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrls: ['./my-schedules.component.scss']
})
export class MySchedulesComponent implements OnInit {
  firstActive: SyllabusModel;
  secondActive: SyllabusModel;
  departments: DepartmentModel[] = [];

  constructor(
    private authService: AuthService,
    private departmentInstructorService: DepartmentInstructorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.departmentInstructorService.getDepartmentsForUserId(this.authService.userInfo.userId).subscribe((dps) => {
      this.departments = dps;
    });
  }

  goToSchedule(departmentId: number) {
    this.router.navigate(['pages/schedule/' + departmentId]);
  }

}
