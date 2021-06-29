import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-deleteorder',
  templateUrl: './deleteorder.component.html',
  styleUrls: ['./deleteorder.component.css']
})
export class DeleteorderComponent implements OnInit {

  oid:number;
  msg:string;

  constructor(public orderservice:OrderService) { }

  ngOnInit() {
  }

  deleteOrder():void{
    if(this.oid==undefined || this.oid==null || this.oid<=0){
      this.msg="Enter the Order Id greater than 0";
      return ;
    }
    this.orderservice.deletebyorderid(this.oid).subscribe(
      data=>{console.log(data);this.msg=data;},
      error=>{console.log(error);}
    );
    

  }

}
