import { AKTS, WeeklyHours, LessonTypes, EducationTypes } from '../enums';

export interface LessonModel {
    lessonId: number;
    name: string;
    lessonCode: string;
    group: String;
    akts: AKTS;
    weeklyHour: WeeklyHours;
    lessonType: LessonTypes;
    educationType: EducationTypes;
}