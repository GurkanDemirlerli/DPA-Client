import { Roles, Titles } from '../enums';

export interface ListUserModel {
    roles?: Roles;
    userId?: number;
    name?: string;
    email?: string;
    title?: Titles
}