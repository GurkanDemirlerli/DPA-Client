import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

import {
    AddDepartmentLessonModel,
    UpdateDepartmentLessonModel,
    LessonModel
} from 'src/app/models';

@Injectable()
export class DepartmentLessonService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public add(model: AddDepartmentLessonModel): Observable<any> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<any>(this.domain + 'DepartmanLesson', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public delete(departmentId: number, lessonId: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `DepartmanLesson/${departmentId}/departman/${lessonId}/lesson`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getLessonsByDepartmentId(departmentId: number): Observable<LessonModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<LessonModel[]>(this.domain + `DepartmanLesson/${departmentId}/lessons`, headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }

    public getDepartmentsForLessonId(lessonId: number): Observable<LessonModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<LessonModel[]>(this.domain + `DepartmanLesson/${lessonId}/departmans`, headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }

    public updateByDepartmentId(model: UpdateDepartmentLessonModel, departmentId: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `DepartmanLesson/${departmentId}/departman`, model, headers)
            .pipe(
                tap(() => {
                    console.log('OK');
                }),
                catchError(this.handleError)
            );
    }

    public updateByLessonId(model: UpdateDepartmentLessonModel, lessonId: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `DepartmanLesson/${lessonId}/departman`, model, headers)
            .pipe(
                tap(() => {
                    console.log('OK');
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