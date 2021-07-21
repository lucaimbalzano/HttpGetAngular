import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../user';

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

   createUser(user: user): Observable<any>{
      return this.http.post(baseUrl+"/posts", user)
        .pipe(map((result:any)=>{
          return result;
      }))
   }
}
