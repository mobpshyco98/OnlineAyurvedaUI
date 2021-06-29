import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-viewallorders',
  templateUrl: './viewallorders.component.html',
  styleUrls: ['./viewallorders.component.css']
})
export class ViewallordersComponent implements OnInit {

  orders:any;
  msg:string;

  constructor(public orderservice:OrderService) { }

  ngOnInit() {
  }

  vieworders():void{
    this.orderservice.viewallorders().subscribe(data=>{
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
