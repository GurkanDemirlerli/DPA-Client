import { HttpHeaders } from '@angular/common/http';

export class ServicesHelpers {

    static createAuthenticationHeader() {
        let authToken = localStorage.getItem('token');
        return new Object({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            })
        });
    }

}