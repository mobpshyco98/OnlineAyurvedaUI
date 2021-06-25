import { Customer } from "./customer";
import { Medicine } from "./medicine";

export class Cart {
    cartId:number;
    cust:Customer = new Customer();
	medicine:Medicine = new Medicine();
    qty:number;
    
}
