import { MySchedulesComponent } from './my-schedules/my-schedules.component';
import { MyDepartmentInstructorsComponent } from './my-department-instructors/my-department-instructors.component';
import { MyDepartmentLessonsComponent } from './my-department-lessons/my-department-lessons.component';
import { LocationsComponent } from './locations/locations.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstraintsComponent } from './constraints/constraints.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ReportsComponent } from './reports/reports.component';
import { PagesComponent } from './pages.component';
import { RoleGuard } from '../guards/auth.guard';
import { RolesWithWord } from '../enums';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'schedule',
                component: ScheduleComponent
            },
            {
                path: 'schedule/:departmentId',
                component: ScheduleComponent
            },
            {
                path: 'schedules',
                component: ScheduleListComponent
            },
            {
                path: 'my-schedules',
                component: MySchedulesComponent
            },
            // {
            //     path: 'lessons',
            //     component: LessonsComponent,
            //     canActivate: [RoleGuard],
            //     data: {
            //         expectedRoles: [
            //             RolesWithWord.Administrator
            //         ]
            //     }
            // },
            {
                path: 'instructors',
                component: InstructorsComponent
            },
            {
                path: 'constraints',
                component: ConstraintsComponent
            },
            {
                path: 'faculties',
                component: FacultiesComponent
            },
            {
                path: 'locations',
                component: LocationsComponent
            },
            {
                path: 'my-department-lessons',
                component: MyDepartmentLessonsComponent
            },
            {
                path: 'my-department-instructors',
                component: MyDepartmentInstructorsComponent
            },
            {
                path: 'departments',
                component: DepartmentsComponent
            },
            {
                path: 'lessons',
                component: LessonsComponent
            },
            {
                path: 'reports',
                component: ReportsComponent
            }]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }