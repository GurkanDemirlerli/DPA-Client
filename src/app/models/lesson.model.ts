import { DepartmentModel } from './department.model';
import { AKTS, WeeklyHours, LessonTypes, EducationTypes } from '../enums';
import { ListUserModel } from './list-user.model';

export interface LessonModel {
    lessonId?: number;
    lessonGroups?: LessonGroupModel[];
    name?: string;
    lessonCode?: string;
    akts?: AKTS;
    weeklyHour?: WeeklyHours;
    lessonType?: LessonTypes;
    semesterType?: number;//enum
    departments?: DepartmentModel[];
    users?: ListUserModel[];
    usersParsed?: string;
    departmentsParsed?: string;
    userCount?: any;
    departmentCount?: any;
    // educationType?: EducationTypes;
    // departmentId?: number;
    // department?: DepartmentModel;
}

export interface AddLessonModel {
    lessonGroupTypes?: number[];
    name: string;
    lessonCode: string;
    akts: AKTS;
    weeklyHour: WeeklyHours;
    lessonType: LessonTypes;
    semesterType: number;//enum
    // departmentId: number;
}

export interface UpdateLessonModel {
    name: string;
    lessonCode: string;
    akts: AKTS;
    weeklyHour: WeeklyHours;
    lessonType: LessonTypes;
    semesterType: number;//enum
    // departmentId: number;
}

export interface LessonGroupModel {
    lessonGroupId: number;
    groupType: number;//enum
}
