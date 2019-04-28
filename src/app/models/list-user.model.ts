import { DepartmentModel } from 'src/app/models/department.model';
import { Roles, Titles } from '../enums';

export interface ListUserModel {
    roles?: Roles;
    userId?: number;
    name?: string;
    surname?: string;
    email?: string;
    title?: Titles;
    departments?: DepartmentModel[];
    departmentsParsed?: string;
}