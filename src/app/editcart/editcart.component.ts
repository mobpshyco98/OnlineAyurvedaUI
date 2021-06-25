import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-editcart',
  templateUrl: './editcart.component.html',
  styleUrls: ['./editcart.component.css']
})
export class EditcartComponent implements OnInit,OnChanges {
cartObj:Cart[] = [];
cartId:number;
qty:number;
msg:string;

  constructor(private cartService:CartserviceService,private route:ActivatedRoute,@Inject(DOCUMENT) document,private router:Router) {

   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("inside on changes");
    console.log(document.getElementById("qtyEdit"));
  }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      this.cartId = parseInt(params.get("cartId"));
      console.log(this.cartId);
      console.log("inside ngOnint for activated route");
    })

    
     
  }
  showCartItem(){
    this.cartService.viewByCartId(this.cartId).subscribe(data => {this.cartObj = data;
                                                                  console.log(this.cartObj);
                                                                  this.msg = 'confirmed';
                                                                  console.log(this.msg) });
  }

  editCartItem(){
    console.log("inside edit item");
    console.log(this.qty);
    return this.cartService.editCartItems(this.qty,this.cartId).subscribe(data =>{console.log(data);
                                                                                  this.router.navigate(['../getcustomercart']);});
  }

}
