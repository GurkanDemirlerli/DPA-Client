import { DepartmanModel } from './departman.model';
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
    departmanId?: number;
    departman?: DepartmanModel;
}

export interface AddUserModel {
    login?: string;
    password?: string;
    name?: string;
    surname?: string;
    email?: string;
    roles?: Roles;
    title?: Title;
    departmanId?: number;
}

export interface UpdateUserModel {
    login?: string;
    password?: string;
    name?: string;
    surname?: string;
    email?: string;
    roles?: Roles;
    title?: Title;
    departmanId?: number;
}