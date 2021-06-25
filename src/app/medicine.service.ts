import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(public http:HttpClient) { }

  viewbycategory(categoryName:string):Observable<any>{
    return this.http.get('http://localhost:8082/oamapp/viewallmedicinebycategory/'+categoryName);
  }
}
