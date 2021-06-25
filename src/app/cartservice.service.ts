import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartDto } from './cart-dto';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
userName:string;
  constructor(private http:HttpClient) { }

  public viewByCustomerId(custId:number){
    return this.http.get<any>('http://localhost:8082/oamapp/vieworderbycustomerid/'+custId);
  }

  public addToCart(cartDto:CartDto){
    return this.http.post('http://localhost:8082/oamapp/addtocart',cartDto,{responseType:'text'});
  }

  public deleteFromCart(cartId:number){
    return this.http.delete('http://localhost:8082/oamapp/removemedicinesbycartid/'+cartId,{responseType:'text'});
  }

  public viewByCartId(cartId:number){
    return this.http.get<any>('http://localhost:8082/oamapp/getByCartId/'+cartId);
  }

  public editCartItems(qty:number,cartId:number){
    return this.http.put('http://localhost:8082/oamapp/qtyedit/'+cartId+'/'+qty,{responseType:'text'});
  }
}
