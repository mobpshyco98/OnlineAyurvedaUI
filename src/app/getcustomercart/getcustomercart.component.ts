import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-getcustomercart',
  templateUrl: './getcustomercart.component.html',
  styleUrls: ['./getcustomercart.component.css']
})
export class GetcustomercartComponent implements OnInit {
  custId: number;
  msg: string;
  cartObj: Cart[] = [];
  user: string;
  cartId: number;
  sum: number;
  custId2: number;

  constructor(private cartService: CartserviceService) {
    this.user = this.cartService.userName;
    this.user = 'Sourabh';
  }


  ngOnInit() {
    console.log("inside ngOnInti");
    this.custId = 1003;
    this.getCustomerCart();
  }

  getCustomerCart() {
    return this.cartService.viewByCustomerId(this.custId).subscribe(data => {
      console.log(data);
      this.cartObj = data;
      console.log("getting cart items");
      this.msg = undefined
      this.sum = 0;
      this.cartAmount();
    },
      error => {
        this.msg = "No cart item Found";
        // this.cartObj = undefined
      });


  }

  deleteItem(cartId: number) {
    console.log("inside delete of getcustomer");
    return this.cartService.deleteFromCart(cartId).subscribe(data => {
      console.log(data);
      this.getCustomerCart();
    });

  }

  cartAmount(): number {
    console.log(this.cartObj, "inside calculate");
     this.cartObj.forEach(c => {
      console.log("inside loop");
      this.sum = this.sum + (c.medicine.medicineCost)*(c.qty);
      console.log(this.sum);
     });
     return Math.round(this.sum);
  }
}

