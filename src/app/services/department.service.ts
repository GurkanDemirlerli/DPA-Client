import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenModel } from '../models/token.model';

import {
    DepartmentModel,
    AddDepartmentModel,
    UpdateDepartmentModel
} from 'src/app/models';

@Injectable()
export class DepartmentService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public getAll(): Observable<DepartmentModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<DepartmentModel[]>(this.domain + 'Department', headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }


    public add(model: AddDepartmentModel): Observable<any> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<any>(this.domain + 'Department', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public setFirstSchedule(departmentId: number, scheduleId): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Department/${departmentId}/firstActiveSyllabus/${scheduleId}`, {}, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public setSecondSchedule(departmentId: number, scheduleId): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Department/${departmentId}/secondActiveSyllabus/${scheduleId}`, {}, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public update(model: UpdateDepartmentModel, id: number): Observable<void> {
        const helper = new JwtHelperService();
        const token = localStorage.getItem('token');
        const decoded: TokenModel = helper.decodeToken(token);
        const updateModel = {
            userId: model.userId,
            departmentCode: model.departmentCode,
            facultyId: model.facultyId,
            title: model.title
        }
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Department/${id}`, updateModel, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public delete(id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `Department/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public get(id: number): Observable<DepartmentModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<DepartmentModel>(this.domain + `Department/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getMyDepartment() {
        const helper = new JwtHelperService();
        const token = localStorage.getItem('token');
        const decoded: TokenModel = helper.decodeToken(token);
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<DepartmentModel>(this.domain + `Department/getDepartmentForHeadOfDepartment/${decoded.sub}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        const errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}