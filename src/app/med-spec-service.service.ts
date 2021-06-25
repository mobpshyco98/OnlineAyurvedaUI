import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medspecdto } from './medspecdto';

@Injectable({
  providedIn: 'root'
})
export class MedSpecServiceService {

  constructor(private http: HttpClient) { }

  public addMedSpecs(medSpecs: Medspecdto): Observable<any>{
    return this.http.post("http://localhost:8082/oamapp/addspecs/", medSpecs, {responseType: 'text'});
  }

  public viewMedSpecsById(mid:number): Observable<any>{
    return this.http.get("http://localhost:8082/oamapp/viewspecs/" +mid);
  }

  public editMedSpecs(medSpecs: Medspecdto): Observable<any>{
    return this.http.put("http://localhost:8082/oamapp/editspecs/", medSpecs, {responseType: 'text'});
  }

}
