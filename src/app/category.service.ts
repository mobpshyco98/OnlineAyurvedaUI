import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catdto } from './catdto';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  addcategory(cat:Catdto):Observable<any> {
    return this.http.post("http://localhost:8082/oamapp/addCategory",cat);
  }

  viewallcategory():Observable<any> {
    return this.http.get("http://localhost:8082/oamapp/viewallcategory");
  }
  

  constructor(public http:HttpClient) { }
}
