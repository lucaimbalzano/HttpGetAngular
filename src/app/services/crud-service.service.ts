import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://jsonplaceholder.typicode.com/users";

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http: HttpClient) {
   }

   getAll(): Observable<any> {
      return this.http.get(baseUrl);
   }
}
