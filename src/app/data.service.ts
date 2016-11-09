import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './signup/student';

@Injectable()

export class DataService { 
    private headers = new Headers({'Content-Type': 'application/json'});
    private heroesUrl = 'http://localhost/dev/dls/api/v1/individuals';  // URL to web api
    
    constructor(private http: Http) { }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    createStudent(student: Student) : Promise<Student> {
        return this.http
                .post(this.heroesUrl, JSON.stringify(student), {headers: this.headers})
                .toPromise()
                .then(res => res.json().data)
                .catch(this.handleError);
    }
}