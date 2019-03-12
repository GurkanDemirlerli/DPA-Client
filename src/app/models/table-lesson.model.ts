import { EducationTypesTableView } from '../enums/education-types.enum';
import { AKTS, WeeklyHours } from '../enums';
import { LessonTypesTableView } from '../enums/lesson-types.enum';

export interface LessonModelTableView {
    lessonId?: number;
    name?: string;
    lessonCode?: string;
    group?: string;
    akts?: AKTS;
    weeklyHour?: WeeklyHours;
    lessonType?: LessonTypesTableView;
    educationType?: EducationTypesTableView;
    departmanId?: number;
}