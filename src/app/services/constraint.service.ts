import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

import {
    ConstraintModel,
    AddConstraintModel,
    UpdateConstraintModel
} from 'src/app/models';

@Injectable()
export class ConstraintService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public getAll(): Observable<ConstraintModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<ConstraintModel[]>(this.domain + 'Constraint', headers)
            .pipe(
                tap((res) => {
                }),
                catchError(this.handleError)
            );
    }


    public add(model: AddConstraintModel): Observable<any> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<any>(this.domain + `Constraint/${model.userId}`, model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public update(model: UpdateConstraintModel, id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Constraint/${id}`, model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public delete(id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `Constraint/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public get(id: number): Observable<ConstraintModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<ConstraintModel>(this.domain + `Constraint/${id}`, headers)
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