import { ListUserModel } from './list-user.model';
import { FacultyModel } from './faculty.model';
export interface DepartmentModel {
    departmentId?: number;
    title?: string;
    departmentCode?: string;
    facultyId?: number;
    faculty?: FacultyModel;
    userId?: number;
    firstActiveSyllabusId?: number;
    secondActiveSyllabusId?: number;
    facultyName?: string;
    head?: ListUserModel;
    headName?: string;
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