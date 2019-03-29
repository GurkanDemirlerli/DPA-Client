import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

import {
    LocationModel,
    AddLocationModel,
    UpdateLocationModel
} from 'src/app/models';

@Injectable()
export class LocationService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public getAll(): Observable<LocationModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<LocationModel[]>(this.domain + 'Location', headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }


    public add(model: AddLocationModel): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<void>(this.domain + 'Location', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public update(model: UpdateLocationModel, id: number): Observable<void> {
        console.log(model);
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Location/${id}`, model, headers)
            .pipe(
                tap(() => {
                    console.log('OK');
                }),
                catchError(this.handleError)
            );
    }

    public delete(id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `Location/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public get(id: number): Observable<LocationModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<LocationModel>(this.domain + `Location/${id}`, headers)
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