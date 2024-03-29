import { InstructorLessonService } from './services/instructor-lesson.service';
import { LessonService } from './services/lesson.service';
import { LocationService } from './services/location.service';
import { ConstraintService } from './services/constraint.service';
import { DepartmentService } from './services/department.service';
import { LocationMockService } from './mocks/location.mock.service';
import { LessonMockService } from './mocks/lesson.mock.service';
import { DepartmentMockService } from './mocks/department.mock.service';
import { FacultyMockService } from './mocks';
import { FacultyService } from './services/faculty.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoleGuard, AuthGuard, AuthNotAllowed } from './guards/auth.guard';
import { UserMockService } from './mocks/user.mock.service';
import { ConstraintMockService } from './mocks/constraint.mock.service';
import { DepartmentLessonService } from './services/department-lesson.service';
import { ToastrModule } from 'ngx-toastr';
import { ScheduleMockService } from './mocks/schedule.mock.service';
import { SyllabusService } from './services/syllabus.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DepartmentInstructorService } from './services/department-instructor.service';
import { UnitLessonService } from './services/unit-lesson.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UnitLessonService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    SyllabusService,
    ScheduleMockService,
    LocationMockService,
    ConstraintMockService,
    UserMockService,
    FacultyMockService,
    DepartmentMockService,
    LessonMockService,
    ConstraintService,
    AuthService,
    FacultyService,
    InstructorLessonService,
    LocationService,
    DepartmentLessonService,
    LessonService,
    DepartmentService,
    DepartmentInstructorService,
    AuthGuard,
    RoleGuard,
    AuthNotAllowed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
