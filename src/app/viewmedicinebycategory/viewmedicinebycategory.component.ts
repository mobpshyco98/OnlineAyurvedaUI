import { Component, OnInit } from '@angular/core';
import { CartDto } from '../cart-dto';
import { CartserviceService } from '../cartservice.service';
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
  med: Meddto = new Meddto();
  msg: string;
  msgflag: boolean;
  categoryName: string;
  medicines: Medicine[] = [];
  categories: Category[] = [];
  medicineId: number;

  cartDto:CartDto = new CartDto();
  msg_:string;
  error:string;
  errorList:string[];
  custId:number;
  constructor(private medicineservice: MedicineService, private categoryservice: CategoryService, private cartService: CartserviceService) {
  }

  ngOnInit() {
    this.categoryservice.viewallcategory().subscribe(data => this.categories = data);
    this.custId = 1003;

  }

  viewbycategory() {
    this.medicineservice.viewbycategory(this.categoryName).subscribe(
      data => {
        console.log(data);
        this.medicines = data
      },
      error => {
        console.log(error);
        this.msg = error.error.message;
      }
    )
  }

  addToCart(med:number) {
    console.log("inside add to cart ");
    this.medicineId = med;
    console.log(this.medicineId);
    
    this.cartDto.custId = this.custId;
    this.cartDto.medicineId = this.medicineId;
    this.cartDto.qty = 1;

    console.log(this.cartDto);
    return this.cartService.addToCart(this.cartDto).subscribe(
      data => {
        console.log(data);
        this.msg = JSON.parse(data).message,
          this.error = undefined,
          this.errorList = undefined
          
      },

      error => {
        console.log(error);
        this.error = JSON.parse(error.error).message,
          this.errorList = JSON.parse(error.error).messages,
          this.msg = undefined
      })
  }
}


