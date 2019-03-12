import { WeeklyHours, EducationTypes } from '../enums';

export interface ConstraintModel {
    title: string;
    description: string;
    isFreeDay: boolean;
    isActive: boolean;
    weeklyHour: WeeklyHours;
    educationType: EducationTypes;
    userId: number;
}