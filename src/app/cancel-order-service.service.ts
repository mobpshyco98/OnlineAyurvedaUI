import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancelOrderServiceService {

  constructor(private httpClient: HttpClient) { }

  cancelOrder(orderId: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8082/oamapp/removeorder/" + orderId);
  }
}
