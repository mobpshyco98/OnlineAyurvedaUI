import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDto } from '../customer-dto';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  customerDto: CustomerDto = new CustomerDto;
  msg: string;
  errorList: string;
  constructor(private editService: CustomerService,private route:Router) {
    this.customerDto.customerId = JSON.parse(localStorage.getItem("userinfo")).userId;
    this.msg = undefined;
  }

  ngOnInit() {
  }
  editProfile() {
    console.log(this.customerDto);
    this.editService.editProfile(this.customerDto).subscribe(data => {
      this.msg = JSON.parse(data).message;
      console.log(data);
      this.route.navigateByUrl('/profile');
    },

      error => {
        console.log(error);
        this.errorList = JSON.parse(error.error).messages;
        console.log(this.errorList)
      });
    console.log("inside Edit profile");

  }
}
