import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-viewbyorderid',
  templateUrl: './viewbyorderid.component.html',
  styleUrls: ['./viewbyorderid.component.css']
})
export class ViewbyorderidComponent implements OnInit {

  oid:number;
  orders:any = undefined;
  msg:string;

  constructor(public orderservice:OrderService) { }

  ngOnInit() {
  }

  viewbyorderid():void{
    if(this.oid==undefined || this.oid==null || this.oid<=0){
      this.msg="Enter the Order Id greater than 0";
      return ;
    }
    this.orderservice.viewbyorderid(this.oid).subscribe(data=>{
              console.log(data);
              this.orders=data;
              this.msg=undefined;
            },
            error=>{
              console.log(error);
              //this.msg = error;
              this.orders=undefined;
            });
  }

}
