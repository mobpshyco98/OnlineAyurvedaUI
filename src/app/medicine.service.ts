
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindto } from './logindto';
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
  doLogin(login:Logindto):Observable<any>{ 
    return this.http.post("http://localhost:8082/oamapp/login",login);

  }
  doLogout():Observable<any>{
    let token:string=JSON.parse(localStorage.getItem("userinfo")).token;
    console.log(token);
    const httpheaders=new HttpHeaders({"token-id":token});
    //httpheaders.set("token-id",token);
    return this.http.get("http://localhost:8082/oamapp/logout",{headers:httpheaders});
  }
  encryptString(pwd:string):string{
    let str:string="";
    for(let idx=0; idx<pwd.length;++idx)
    {
      str += String.fromCharCode( pwd.charCodeAt(idx)-3);
    }
    return str;
  }
}
