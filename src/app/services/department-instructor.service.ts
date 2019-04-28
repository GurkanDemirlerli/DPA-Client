import { DepartmentModel } from 'src/app/models/department.model';
import { AddDepartmentInstructorModel } from './../models/add-department-instructor.model';
import { ListUserModel } from './../models/list-user.model';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

@Injectable()
export class DepartmentInstructorService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public add(model: AddDepartmentInstructorModel): Observable<any> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<any>(this.domain + 'DepartmentInstructor', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public delete(departmentId: number, userId: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `DepartmentInstructor/${departmentId}/instructor/${userId}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getUsersByDepartmentId(departmentId: number): Observable<ListUserModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<ListUserModel[]>(this.domain + `DepartmentInstructor/${departmentId}/instructors`, headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }

    public getDepartmentsForUserId(userId: number): Observable<DepartmentModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<DepartmentModel[]>(this.domain + `DepartmentInstructor/${userId}/departments`, headers)
            .pipe(
                tap((res) => {
                    console.log(res);
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