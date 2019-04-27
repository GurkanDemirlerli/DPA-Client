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

    constructor(
        private http: HttpClient
    ) { }

    // public getMock(id: number): Observable<LocationModel> {
    //     const headers = ServicesHelpers.createAuthenticationHeader();
    //     return this.http.get<LocationModel>(this.domain + `Location/${id}`, headers)
    //         .pipe(
    //             tap(() => {
    //             }),
    //             catchError(this.handleError)
    //         );
    // }

    public get(departmentId: number): Observable<SyllabusModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<SyllabusModel>(this.domain + `Syllabus/${departmentId}`, headers)
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