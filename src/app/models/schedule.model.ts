export class ScheduleDay {
    columns: ScheduleColumn[] = [];
}

export class ScheduleColumn {
    blocks: ScheduleBlock[] = [];
}

export class ScheduleBlock {
    blockId?: number;
    units: ScheduleUnit[] = [];
}

export class ScheduleUnit {
    educationType?: number;
    unitLessonId: number;
    starTime: number;
    endTime: number;
    groupType: number;//enum
    dayOfTheWeekType: number;//enum
    lesson: ScheduleLesson;
    user: ScheduleUser;
    location: ScheduleLocation;
}

export class ScheduleLesson {
    lessonId: number;
    name: string;
    lessonCode: string;
    akts: number;
    credit: number;
    weeklyHour: number;
    semesterType: number;//enum
    lessonType: number;//enum
}

export class ScheduleUser {
    userId: number;
    name: string;
    surname: string;
    email: string;
    roles: number;//enum
    status: number;//bu ne
    title: number;//enum
}

export class ScheduleLocation {
    locationId: number;
    title: string;
}
