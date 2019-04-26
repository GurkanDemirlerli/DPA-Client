import { FacultyModel } from './faculty.model';
export interface DepartmentModel {
    departmentId?: number;
    title?: string;
    departmentCode?: string;
    facultyId?: number;
    faculty?: FacultyModel;
    userId?: number;
}

export interface AddDepartmentModel {
    title: string;
    departmentCode: string;
    facultyId: number;
}

export interface UpdateDepartmentModel {
    title: string;
    departmentCode: string;
    facultyId: number;
    userId?: number;
}