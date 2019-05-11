import { AddSyllabusModel } from './../models/schedule.model';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

import {
    LocationModel,
} from 'src/app/models';
import { SyllabusModel } from '../models/syllabus.model';

@Injectable()
export class SyllabusService {
    private domain = server.url + "/";
    // private domain = "http://localhost:49971/";

    // public selected: SyllabusModel[];

    public selectedFirst:SyllabusModel;
    public selectedSecond:SyllabusModel;

    constructor(
        private http: HttpClient
    ) { }

    public add(model: AddSyllabusModel): Observable<SyllabusModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<SyllabusModel>(this.domain + 'Syllabus', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getForDepartment(departmentId: number): Observable<SyllabusModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<SyllabusModel[]>(this.domain + `Syllabus/${departmentId}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getActiveFirstForDepartment(departmentId: number): Observable<SyllabusModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<SyllabusModel>(this.domain + `Syllabus/${departmentId}/firstActiveSyllabus`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getActiveSecondForDepartment(departmentId: number): Observable<SyllabusModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<SyllabusModel>(this.domain + `Syllabus/${departmentId}/secondActiveSyllabus`, headers)
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