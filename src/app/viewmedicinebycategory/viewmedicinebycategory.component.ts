import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Meddto } from '../meddto';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-viewmedicinebycategory',
  templateUrl: './viewmedicinebycategory.component.html',
  styleUrls: ['./viewmedicinebycategory.component.css']
})
export class ViewmedicinebycategoryComponent implements OnInit {

  med:Meddto= new Meddto();
  msg:string; 
  msgflag:boolean;
  categoryName:string;
  medicines:Medicine[]=[];
  categories:Category[]=[];
  constructor(private medicineservice:MedicineService, private categoryservice:CategoryService) { }

  ngOnInit() {
    this.categoryservice.viewallcategory().subscribe(data=>this.categories=data);
  }
  viewbycategory(){
    this.medicineservice.viewbycategory(this.categoryName).subscribe(
      data=>{
        console.log(data);
        this.medicines=data},
      error=>{
        console.log(error);
        this.msg=error.error.message;
      }
    )
  }

}
