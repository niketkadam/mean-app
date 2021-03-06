import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptionsArgs, ResponseContentType, RequestOptions } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getData(data) {
        console.log(data);
        var body = JSON.parse(data);
        const headers = new Headers();
        return this.http.post('/api/add', body, { headers: headers })
            .map(response => response.json())
            .catch(response => {
                this.handleStatusErrors(response.status);
                return response;
            });

    }
    getLogin(email: string, password: string) {
        const headers = new Headers();
        const body="";
        headers.append("Authorization", 'Basic ' + btoa(email + ":" + password));
        headers.append("Content-Type", 'text/plain');
        return this.http.post('/api/login',"", { headers: headers })
            .map(response => response.json())
            .catch(response => {
                this.handleStatusErrors(response.status);
                return response;
            });
    }
    handleStatusErrors(status) {

    }
}