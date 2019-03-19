import { AKTS, WeeklyHours, LessonTypes, EducationTypes } from '../enums';

export interface LessonModel {
    lessonId?: number;
    name?: string;
    lessonCode?: string;
    group?: string;
    akts?: AKTS;
    weeklyHour?: WeeklyHours;
    lessonType?: LessonTypes;
    educationType?: EducationTypes;
    departmanId?: number;
}

export interface AddLessonModel {
    name: string;
    lessonCode: string;
    group: String;
    akts: AKTS;
    weeklyHour: WeeklyHours;
    lessonType: LessonTypes;
    educationType: EducationTypes;
    departmanId: number;
}

export interface UpdateLessonModel {
    name: string;
    lessonCode: string;
    group: String;
    akts: AKTS;
    weeklyHour: WeeklyHours;
    lessonType: LessonTypes;
    educationType: EducationTypes;
    departmanId: number;
}