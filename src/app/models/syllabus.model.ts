
export interface SyllabusModel {
    syllabusId: number;
    year: number;
    // semesterType: number;
    periodType: number;
    educationType: number;
    weeklyHour: number,
    unitLessons: SyllUnitLessonModel[];
    isActive: boolean;
}

export interface SyllUnitLessonModel {
    educationType?:number;
    unitLessonId: number;
    starTime: number;
    endTime: number;
    groupType: number;
    dayOfTheWeekType: number;
    lesson: SyllLessonModel;
    user: SyllUserModel;
    location: SyllLocationModel;
}

export interface SyllLessonModel {
    lessonId: number;
    name: string;
    lessonCode: string;
    akts: number;
    credit: number;
    weeklyHour: number;
    semesterType: number;
    lessonType: number;
}

export interface SyllUserModel {
    userId: number;
    name: string;
    surname: string;
    email: string;
    roles: number;
    status: number;
    title: number;
}

export interface SyllLocationModel {
    locationId: number;
    title: string;
}

