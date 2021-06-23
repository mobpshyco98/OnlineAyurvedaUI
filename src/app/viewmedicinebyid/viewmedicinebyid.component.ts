import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-viewmedicinebyid',
  templateUrl: './viewmedicinebyid.component.html',
  styleUrls: ['./viewmedicinebyid.component.css']
})
export class ViewmedicinebyidComponent implements OnInit {

  medicineID:number;
  medicines:any=undefined;
  msg:string;
  constructor(public medicineservice:MedicineService) { }

  ngOnInit() {
  }

  viewmedicinebyid():void{
    if(this.medicineID==undefined || this.medicineID==null || this.medicineID<0)
    {
      this.msg="enter the medicine id greater than 0";
    }
    this.medicineservice.viewmedicinebyid(this.medicineID).subscribe(data=>{
      console.log(data);
      this.medicines=data;
      this.msg=undefined;
    },
    error=>{
      console.log(error);
      this.msg=error.error.message;
      this.medicines=undefined;
    }
    );
  }
}
