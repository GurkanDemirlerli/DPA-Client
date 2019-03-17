import { WeeklyHours, EducationTypes } from '../enums';

export interface ConstraintModel {
    constraintId?: number;
    title?: string;
    description?: string;
    isFreeDay?: boolean;
    isActive?: boolean;
    weeklyHour?: WeeklyHours;
    educationType?: EducationTypes;
    userId?: number;
}

export interface AddConstraintModel {
    title: string;
    description: string;
    isFreeDay: boolean;
    isActive: boolean;
    weeklyHour: WeeklyHours;
    educationType: EducationTypes;
    userId: number;
}

export interface UpdateConstraintModel {
    title: string;
    description: string;
    isFreeDay: boolean;
    isActive: boolean;
    weeklyHour: WeeklyHours;
    educationType: EducationTypes;
    userId: number;
}