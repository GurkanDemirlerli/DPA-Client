import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { ScheduleComponent } from './schedule/schedule.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ReportsComponent } from './reports/reports.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DepartmentsComponent } from './departments/departments.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
    declarations: [
        ScheduleComponent,
        InstructorsComponent,
        LessonsComponent,
        ReportsComponent,
        ConstraintsComponent,
        PagesComponent,
        FacultiesComponent,
        DepartmentsComponent
    ],
    imports: [
        AutoCompleteModule,
        DropdownModule,
        CommonModule,
        PagesRoutingModule,
        LayoutModule,
        TableModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        BreadcrumbModule,
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }