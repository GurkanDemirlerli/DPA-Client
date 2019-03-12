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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    FacultyMockService,
    DepartmentMockService,
    LessonMockService,
    AuthService,
    FacultyService,
    AuthGuard,
    RoleGuard,
    AuthNotAllowed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
