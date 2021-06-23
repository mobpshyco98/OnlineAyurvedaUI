import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meddto } from '../meddto';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-addmedbycat',
  templateUrl: './addmedbycat.component.html',
  styleUrls: ['./addmedbycat.component.css']
})
export class AddmedbycatComponent implements OnInit {
  
  med:Meddto= new Meddto();
  msg:string;
  msgflag:boolean;
  categoryName:string;
  @ViewChild("frm")
  form:NgForm
  constructor(private medicineservice:MedicineService) { }

  ngOnInit() {
  }
  addbycategory():void{
    this.medicineservice.addmedbycat(this.med).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.form.reset;
        this.msgflag=true;
      },
      error=>{
        console.log(error);
        this.msg=error.error.messages[0];
        this.msgflag=false;
      }
    );
  }

}
