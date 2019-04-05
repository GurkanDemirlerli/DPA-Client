import { FacultyModel } from './faculty.model';
export interface DepartmanModel {
    departmanId?: number;
    title?: string;
    departmanCode?: string;
    facultyId?: number;
    faculty?: FacultyModel;
    userId?: number;
}

export interface AddDepartmanModel {
    title: string;
    departmanCode: string;
    facultyId: number;
}

export interface UpdateDepartmanModel {
    title: string;
    departmanCode: string;
    facultyId: number;
    userId?: number;
}