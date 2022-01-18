import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private create = environment.url + '/create';
  private get = environment.url + '/get';

  constructor(private _http: HttpClient) { }

  // Http Headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  // Error handling
  private errorHandl(error:any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  createForm(body: any):Observable<any> {
    return this._http.post(this.create, body, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );

  }

  getFormDetails():Observable<any>{
    return this._http.get(this.get, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
}
