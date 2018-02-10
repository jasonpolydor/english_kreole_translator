import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable() //allow the service to be injected into a component
export class RestProvider {
    //private variable of API server
    private apiUrl = 'https://restcountries.eu/rest/v2/all';

    //Creating a restful httpClient API service
    constructor(public http: HttpClient) {
        console.log('Hello RestProvider Provider');
    }

    //Declared with type Observable (the producer pushing multiple value to subscribers)
    getCountries(): Observable<string[]> {
        return this.http.get(this.apiUrl)
            .map(this.extractData) //map the response of HTTP GET request
            .catch(this.handleError); //if error catch it
    }

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
