import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LocationsComponent } from './locations/locations.component';
import { PickListModule } from 'primeng/picklist';
import { MyDepartmentInstructorsComponent } from './my-department-instructors/my-department-instructors.component';
import { MyDepartmentLessonsComponent } from './my-department-lessons/my-department-lessons.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { MySchedulesComponent } from './my-schedules/my-schedules.component';
import { RouterModule } from '@angular/router';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MultiSelectModule} from 'primeng/multiselect';
@NgModule({
    declarations: [
        ScheduleComponent,
        InstructorsComponent,
        LessonsComponent,
        ReportsComponent,
        ConstraintsComponent,
        PagesComponent,
        FacultiesComponent,
        DepartmentsComponent,
        LocationsComponent,
        MyDepartmentInstructorsComponent,
        MyDepartmentLessonsComponent,
        ScheduleListComponent,
        MySchedulesComponent
    ],
    imports: [
        MultiSelectModule,
        RouterModule,
        InputTextareaModule,
        InputSwitchModule,
        SelectButtonModule,
        InputTextModule,
        PanelModule,
        DataViewModule,
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
        PickListModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }