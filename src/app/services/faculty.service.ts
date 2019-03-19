import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

import {
    FacultyModel,
    AddFacultyModel,
    UpdateFacultyModel
} from 'src/app/models';

@Injectable()
export class FacultyService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public getFaculties(): Observable<FacultyModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<FacultyModel[]>(this.domain + 'Faculty', headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }


    public add(model: AddFacultyModel): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<void>(this.domain + 'Faculty', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public update(model: UpdateFacultyModel, id: number): Observable<void> {
        console.log(model);
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Faculty/${id}`, model, headers)
            .pipe(
                tap(() => {
                    console.log('OK');
                }),
                catchError(this.handleError)
            );
    }

    public delete(id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `Faculty/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public get(id: number): Observable<FacultyModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<FacultyModel>(this.domain + `Faculty/${id}`, headers)
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