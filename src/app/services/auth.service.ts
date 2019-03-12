import { LoginModel } from './../models/login.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { server } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

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

    private storeUserData(token: string) {
        localStorage.setItem('token', token);
    }

    private handleError(err) {
        const errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}