import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { MedicineService } from '../medicine.service';
import { OrderService } from '../order.service';
import { Orderdto } from '../orderdto';

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
  orderDto: Orderdto = new Orderdto();

  error: string;
  errorList: string[];

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();

  date = this.yyyy + '-' + this.mm + '-' + this.dd;

  constructor(private orderservice: OrderService, public cartService: CartserviceService) {
    this.custId = JSON.parse(localStorage.getItem("userinfo")).userId;
    console.log("inside get customer userId", this.custId);
  }


  ngOnInit() {
    console.log("inside ngOnInti");
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
      this.orderDto.totalCost = this.sum;

    },
      error => {
        this.msg = "No cart item Found";
        // this.cartObj = undefined
        this.sum = 0;
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
      this.sum = this.sum + (c.medicine.medicineCost) * (c.qty);
      console.log(this.sum);
    });
    return Math.round(this.sum);
  }

  addOrder() {
    console.log("inside add to order ");

    this.orderDto.customerId = this.custId;
    this.orderDto.orderDate = this.date;
    this.orderDto.orderStatus = "confirmed";
    //this.orderDto.totalCost = this.sum;

    console.log(this.orderDto);

    return this.orderservice.createorder(this.orderDto).subscribe(
      data => {
        console.log(data);
        this.msg = JSON.parse(data).message,
          this.error = undefined,
          this.errorList = undefined
      },
      error => {
        console.log(error);
        this.error = JSON.parse(error.error).message,
          this.errorList = JSON.parse(error.error).messages,
          this.msg = undefined;
      }
    );
  }

}

