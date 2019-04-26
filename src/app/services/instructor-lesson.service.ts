import { ListUserModel } from './../models/list-user.model';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

import {
    AddUserLessonModel,
    LessonModel,
    UpdateUserLessonModel
} from 'src/app/models';

@Injectable()
export class InstructorLessonService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public add(model: AddUserLessonModel): Observable<any> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<any>(this.domain + 'InstructorLesson', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public delete(userId: number, lessonId: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `InstructorLesson/${userId}/instructor/${lessonId}/lesson`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public updateByLessontId(model: UpdateUserLessonModel, lessonId: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `InstructorLesson/${lessonId}/lesson`, model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public updateByUserId(model: UpdateUserLessonModel, userId: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `InstructorLesson/${userId}/instructor`, model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getLessonsByUserId(userId: number): Observable<LessonModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<LessonModel[]>(this.domain + `InstructorLesson/${userId}/lessons`, headers)
            .pipe(
                tap((res) => {
                }),
                catchError(this.handleError)
            );
    }

    public getUsersByLessonId(lessonId: number): Observable<ListUserModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<LessonModel[]>(this.domain + `InstructorLesson/${lessonId}/instuctors`, headers)
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