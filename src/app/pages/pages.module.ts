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

@NgModule({
    declarations: [
        ScheduleComponent,
        InstructorsComponent,
        LessonsComponent,
        ReportsComponent,
        ConstraintsComponent,
        PagesComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        LayoutModule
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }