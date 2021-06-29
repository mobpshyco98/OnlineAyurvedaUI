import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  custObj: Customer;
  custId: number;
  msg: string;
  constructor(public customerService: CustomerService) {
    this.custId = JSON.parse(localStorage.getItem("userinfo")).userId;
    
  }

  ngOnInit() {
    this.customerService.viewProfile(this.custId).subscribe(data => {
      this.custObj = data;
      console.log(data);
      console.log("inside view profile")
    },
      error => { this.msg = "No records" })

  }



}
