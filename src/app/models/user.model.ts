import { DepartmentModel } from './department.model';
import { Roles } from '../enums';
import { Title } from '@angular/platform-browser';

export interface UserModel {
    userId?: number;
    login?: string;//silinecek
    password?: string;//silinecek
    name?: string;
    surname?: string;
    email?: string;
    roles?: Roles;
    title?: Title;
    departmentId?: number;
    department?: DepartmentModel;
}

export interface AddUserModel {
    login?: string;
    password?: string;
    name?: string;
    surname?: string;
    email?: string;
    roles?: Roles;
    title?: Title;
    // departmentId?: number;
}

export interface UpdateUserModel {
    // login?: string;
    // password?: string;
    name?: string;
    surname?: string;
    email?: string;
    roles?: Roles;
    title?: Title;
    // departmentId?: number;
}