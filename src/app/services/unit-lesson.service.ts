import { UpdateUnitLessonModel } from './../models/update-unit-lesson.model';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServicesHelpers } from './helpers';

@Injectable()
export class UnitLessonService {
    private domain = server.url + "/";

    constructor(
        private http: HttpClient
    ) { }

    public update(model: UpdateUnitLessonModel): Observable<void> {
        const headers = ServicesHelpers.createAuthenticationHeader();
        return this.http.put<void>(this.domain + `UnitLesson`, model, headers)
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