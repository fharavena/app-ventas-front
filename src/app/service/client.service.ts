import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public _http: HttpClient) { }

  getClient() {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    return this._http.get(global.url + 'client/', { headers });
  }
}
