import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Catdto } from '../catdto';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  cat: Catdto=new Catdto();
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm
  constructor(public categoryservice:CategoryService) { }

  ngOnInit() {
  }


  add():void{
    this.categoryservice.addcategory(this.cat).subscribe(
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
