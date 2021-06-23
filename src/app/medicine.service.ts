import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meddto } from './meddto';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  addmedbycat(med:Meddto):Observable<any> {
    return this.http.post('http://localhost:8082/oamapp/addMedicinebycategory',med);
  }
  viewbycategory(categoryName: string):Observable <any>{
    return this.http.get('http://localhost:8082/oamapp/viewallmedicinebycategory/'+categoryName);
  }
  viewmedicinebyid(medicineID:number):Observable<any>{
    return this.http.get("http://localhost:8082/oamapp/viewmedicinebyid/"+medicineID);
  }

  constructor(public http:HttpClient) { }
}
