import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/user/models/Response';
import { environment } from 'src/environments/environment';
const RUTE = environment.catalogues;
@Injectable({
  providedIn: 'root'
})
export class CataloguesService {

  constructor(private httpClient: HttpClient) { }

  getDepartments(): Observable<Response> {
    const URL = `${RUTE}/getAllDepartment`;
    return this.httpClient.get<Response>(URL);
  }
}
