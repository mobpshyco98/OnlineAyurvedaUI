import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-deletecartitem',
  templateUrl: './deletecartitem.component.html',
  styleUrls: ['./deletecartitem.component.css']
})
export class DeletecartitemComponent implements OnInit,OnChanges {

cartId:number;
custId:number; 
  
  constructor(private cartService:CartserviceService,private route:ActivatedRoute,private router:Router) { 
    this.custId = 1003;
  }
  ngOnChanges(changes: SimpleChanges) {
    
  }

  ngOnInit():void {
    this.route.paramMap.subscribe(params =>{
      this.cartId = parseInt(params.get("cartId"));
      console.log(this.cartId);
    })
    
  }

  deleteItem(){
    console.log("inside delete of delete component");
    return this.cartService.deleteFromCart(this.cartId).subscribe(data=>{console.log(data);
     
      this.router.navigateByUrl('/getcustomercart');
          });

  }

}
