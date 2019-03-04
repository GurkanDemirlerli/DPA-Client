import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstraintsComponent } from './constraints/constraints.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ReportsComponent } from './reports/reports.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [{
            path: 'schedule',
            component: ScheduleComponent
        },
        {
            path: 'lessons',
            component: LessonsComponent
        },
        {
            path: 'instructors',
            component: InstructorsComponent
        },
        {
            path: 'constraints',
            component: ConstraintsComponent
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