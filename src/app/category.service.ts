import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }
  viewallcategory():Observable<any> {
    return this.http.get("http://localhost:8082/oamapp/viewallcategory");
  }
}
