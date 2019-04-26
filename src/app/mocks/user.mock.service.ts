import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { UserModel, AddUserModel, UpdateUserModel } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { Roles, Titles } from '../enums';

@Injectable()
export class UserMockService extends MockServiceBase<UserModel, AddUserModel, UpdateUserModel> {

    constructor() {
        super("userId", [
            {
                userId: 1,
                login: "ntasbasi",
                password: "123456",
                name: "nevzat",
                surname: "taşbaşı",
                email: "ntasbasi@sakarya.edu.tr",
                roles: Roles.User,
                title: Titles.OgrGor,
                departmentId: 1,
            },
            {
                userId: 2,
                login: "yyurtay",
                password: "123456",
                name: "yüksel",
                surname: "yurtay",
                email: "yyurtay@sakarya.edu.tr",
                roles: Roles.User,
                title: Titles.OgrGor,
                departmentId: 1,
            },
            {
                userId: 3,
                login: "coz",
                password: "123456",
                name: "cemil",
                surname: "öz",
                email: "coz@sakarya.edu.tr",
                roles: Roles.Admin,
                title: Titles.Profesor,
                departmentId: 1,
            },
            {
                userId: 4,
                login: "dn1",
                password: "123456",
                name: "deneme",
                surname: "dn",
                email: "dn1@sakarya.edu.tr",
                roles: Roles.User,
                title: Titles.Okutman,
                departmentId: 3,
            }
        ]);
    }

    getUsersForDepartment(departmentId: number): Observable<UserModel[]> {
        let data: UserModel[] = [...this.data] as UserModel[];
        let model: UserModel[] = data.filter(x => x.departmentId == departmentId);
        return of(model);
    }
}
