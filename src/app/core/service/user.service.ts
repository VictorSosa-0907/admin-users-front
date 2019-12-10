import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/user/models/Response';
import { User } from 'src/app/user/models/user';
const RUTE = environment.users;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  //el back retorna un array con la data[]
  //en el ResponseUser el data es definido como tipo "any" simulamos el generico
  getUsers(): Observable<Response> {
    const URL = `${RUTE}/getAllUsers`;
    return this.httpClient.get<Response>(URL);
  }
  getUsersById(id: number): Observable<Response> {
    const URL = `${RUTE}/getDetailUser/${id}`;
    return this.httpClient.get<Response>(URL);
  }
  saveUser(user: User): Observable<any> {
    const URL = `${RUTE}/saveUser`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient.post(URL, user, httpOptions);
  }
  updateUser(user: User): Observable<any> {
    const URL = `${RUTE}/updateUser`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient.post(URL, user, httpOptions);
  }
  deleteUser(id: number): Observable<Response> {
    const URL = `${RUTE}/deleteUser/${id}`;
    return this.httpClient.get<Response>(URL);
  }
}
