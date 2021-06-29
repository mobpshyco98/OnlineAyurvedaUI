import { Component, OnInit } from '@angular/core';
import { CancelOrderServiceService } from '../cancel-order-service.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {
  orderId: number;
  flag: String;
  error:String;

  constructor(private cancelService: CancelOrderServiceService) {
    this.flag = undefined;
    this.error=undefined;
   }

  ngOnInit() {
  }

  cancelOrder(){
    return this.cancelService.cancelOrder(this.orderId).subscribe(data=>{console.log(data);
                                                                  this.flag="Order Cancelled Successfully";

  },
  error=>{this.error="Order id not found"});
  }

}
