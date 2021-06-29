import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderdto } from './orderdto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }

  viewbycustid(cid: number): Observable<any> {
    return this.http.get("http://localhost:8082/oamapp/viewordersbycustid/" + cid);
  }

  viewbyorderid(oid: number): Observable<any> {
    return this.http.get("http://localhost:8082/oamapp/vieworderdetails/" + oid);
  }

  createorder(order: Orderdto): Observable<any> {
    return this.http.post("http://localhost:8082/oamapp/addordermedicine", order, { responseType: 'text' });
  }

  deletebyorderid(oid: number): Observable<any> {
    return this.http.delete("http://localhost:8082/oamapp/removeordersbyorderid/" + oid);
  }

  viewallorders(): Observable<any> {
    return this.http.get("http://localhost:8082/oamapp/viewallorders");
  }
}
