import { BASE_URL } from './../configs/api/index';
import { Users } from './crud-service.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<Users> {
    return this._http.get<Users>(BASE_URL)
    .pipe(
      catchError(this.handleError),
      tap(user => console.log(user)),
    );
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'Unknown error'

    if(error.error instanceof ErrorEvent) {
      message = `Error ${error.error.message}`
    }
    else
      message = `Error code ${error.status}\n Message: ${error.message}`

    return throwError(message)
  }
}
