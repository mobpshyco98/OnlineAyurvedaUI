import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartDto } from '../cart-dto';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

cartDto:CartDto = new CartDto();
msg:string;
error:string;
errorList:string[];

@ViewChild("frm")
form: NgForm

  constructor(private cartService:CartserviceService) { }

  ngOnInit() {
    console.log("add");
  }

  addToCart(){
    console.log("inside add to cart");
    return this.cartService.addToCart(this.cartDto).subscribe(
      data=>{console.log(data);
      this.msg = JSON.parse(data).message,
      this.error = undefined, 
      this.errorList = undefined,
      this.form.reset()},
    
      error=>{
        console.log(error);
        this.error = JSON.parse(error.error).message,
        this.errorList = JSON.parse(error.error).messages,
        this.msg = undefined
      })
  }
}
