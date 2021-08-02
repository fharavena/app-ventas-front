import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(public _http: HttpClient) { }

  get_sales() {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    return this._http.get(global.url + 'sale/', { headers });
  }

  get_sale(id) {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    let url = global.url + 'sale/' + id;
    return this._http.get(url, { headers });
  }

  delete_sale(id) {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    let url = global.url + 'sale/' + id;
    return this._http.delete(url, { headers });
  }


  save_sale(params): Observable<any> {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    let url = global.url + 'sale/' ;
    return this._http.post(url, params, { headers });
  }



}
