import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenModel } from '../models/token.model';

import {
    DepartmanModel,
    AddDepartmanModel,
    UpdateDepartmanModel
} from 'src/app/models';

@Injectable()
export class DepartmentService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public getAll(): Observable<DepartmanModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<DepartmanModel[]>(this.domain + 'Departman', headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }


    public add(model: AddDepartmanModel): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<void>(this.domain + 'Departman', model, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public update(model: UpdateDepartmanModel, id: number): Observable<void> {
        console.log(model);
        const helper = new JwtHelperService();
        const token = localStorage.getItem('token');
        const decoded: TokenModel = helper.decodeToken(token);
        const updateModel = {
            userId: Number(decoded.sub),
            departmanCode: model.departmanCode,
            facultyId: model.facultyId,
            title: model.title
        }
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Departman/${id}`, updateModel, headers)
            .pipe(
                tap(() => {
                    console.log('OK');
                }),
                catchError(this.handleError)
            );
    }

    public delete(id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `Departman/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public get(id: number): Observable<DepartmanModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<DepartmanModel>(this.domain + `Departman/${id}`, headers)
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