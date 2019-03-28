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

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [{
            path: 'schedule',
            component: ScheduleComponent
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