import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  viewProfile(custId:number):Observable<any> {
    return this.http.get('http://localhost:8082/oamapp/viewbyid/'+custId);
  }
}
