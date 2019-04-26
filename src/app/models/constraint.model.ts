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
    startTime?:number;
    endTime?:number;
}

export interface AddConstraintModel {
    title: string;
    description: string;
    isFreeDay: boolean;
    isActive: boolean;
    weeklyHour: WeeklyHours;
    educationType: EducationTypes;
    userId: number;
    startTime: number;//TODO enum yap
    endTime:number;//TODO enum yap
}

export interface UpdateConstraintModel {
    title: string;
    description: string;
    isFreeDay: boolean;
    isActive: boolean;
    weeklyHour: WeeklyHours;
    educationType: EducationTypes;
    userId: number;
    startTime:number;
    endTime:number;
}