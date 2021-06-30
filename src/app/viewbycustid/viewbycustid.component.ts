import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Orderdto } from '../orderdto';

@Component({
  selector: 'app-viewbycustid',
  templateUrl: './viewbycustid.component.html',
  styleUrls: ['./viewbycustid.component.css']
})
export class ViewbycustidComponent implements OnInit {

  cid: number;
  customers: any = undefined;
  msg: string;

  constructor(public orderservice: OrderService) {
    this.cid = JSON.parse(localStorage.getItem("userinfo")).userId;
    console.log("inside get customer userId", this.cid);
  }

  ngOnInit() {
  }

  viewbycustid(): void {
    if (this.cid == undefined || this.cid == null || this.cid <= 0) {
      this.msg = "Enter the Customer Id greater than 0";
      return;
    }
    this.orderservice.viewbycustid(this.cid).subscribe(data => {
      console.log(data);
      this.customers = data;
      this.msg = undefined;
    },
      error => {
        console.log(error);
        //this.msg = "error";
        this.customers = undefined;
      });
  }

}
