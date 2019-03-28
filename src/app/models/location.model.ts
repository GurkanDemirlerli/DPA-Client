import { FacultyModel } from './faculty.model';

export interface LocationModel {
    locationId?: number;
    title?: string;
    facultyId?: number;
    faculty?: FacultyModel;
}

export interface AddLocationModel {
    title: string;
    facultyId: number;
}

export interface UpdateLocationModel {
    title: string;
    facultyId: number;
}