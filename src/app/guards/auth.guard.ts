import { AuthService } from '../services';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenModel } from '../models/token.model';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const helper = new JwtHelperService();
        const expectedRoles: any[] = next.data.expectedRoles;
        const token = localStorage.getItem('token');
        if (helper.isTokenExpired(token)) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        const decoded: TokenModel = helper.decodeToken(token);
        for (let i = 0; i < expectedRoles.length; i++) {
            if (expectedRoles[i] === decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]) {
                return true;
            }
        }
        this.router.navigate(['/auth/login']);
        return false;
    }

}


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const helper = new JwtHelperService();
        const token = localStorage.getItem('token');
        if (token == null) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        if (helper.isTokenExpired(token)) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }

}

@Injectable()
export class AuthNotAllowed implements CanActivate {
    constructor(
        private _authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const helper = new JwtHelperService();
        const token = localStorage.getItem('token');
        console.log(token);
        if (token == null) {
            return true;
        }
        if (helper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }

}