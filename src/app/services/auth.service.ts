import { AddUserModel, UpdateUserModel } from './../models/user.model';
import { LoginModel } from './../models/login.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { server } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenModel } from '../models/token.model';
import { ListUserModel } from '../models';

@Injectable()
export class AuthService {

    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public signIn(user: LoginModel): Observable<any> {
        return this.http.post<any>(this.domain + 'Users/SignIn', user)
            .pipe(
                tap((res) => {
                    this.storeUserData(res.data.token);
                }),
                catchError(this.handleError)
            );
    }

    public signOut(): Observable<any> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.post<any>(this.domain + 'Users/SignOut', {}, headers)
            .pipe(
                tap((res) => {
                    localStorage.clear();
                    console.log(res);
                }),
                catchError((err) => {
                    localStorage.clear();
                    return this.handleError(err);
                })
            );
    }

    public add(model: AddUserModel): Observable<any> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        const helper = new JwtHelperService();
        const token = localStorage.getItem('token');
        const decoded: TokenModel = helper.decodeToken(token);
        let endPoint: string = 'Users/instructor';
        if (decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == "Administrator") {
            endPoint = 'Users/headOfDepartmant';
        }
        return this.http.post<any>(this.domain + endPoint, model, headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError((err) => {
                    return this.handleError(err);
                })
            );
    }

    public getAll(): Observable<ListUserModel[]> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<ListUserModel[]>(this.domain + 'Users', headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError(this.handleError)
            );
    }


    public update(model: UpdateUserModel, id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `Users/${id}`, model, headers)
            .pipe(
                tap((res) => {
                    console.log(res);
                }),
                catchError((err) => {
                    return this.handleError(err);
                })
            );
    }

    public delete(id: number): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.delete<void>(this.domain + `Users/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public get(id: number): Observable<ListUserModel> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.get<ListUserModel>(this.domain + `Users/${id}`, headers)
            .pipe(
                tap(() => {
                }),
                catchError(this.handleError)
            );
    }

    public getMe(): Observable<ListUserModel> {
        const helper = new JwtHelperService();
        const token = localStorage.getItem('token');
        const decoded: TokenModel = helper.decodeToken(token);
        return this.get(Number(decoded.sub));
    }



    private storeUserData(token: string) {
        localStorage.setItem('token', token);
    }

    private handleError(err) {
        const errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}