import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public _http: HttpClient) { }

  getProduct() {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    return this._http.get(global.url + 'product/', { headers });
  }

}
