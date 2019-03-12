import { PeriodTypes } from '../enums';

export interface SyllabusModel {
    syllabusId: number;
    year: number;
    periodType: PeriodTypes
}