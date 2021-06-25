import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';

import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MedicineComponent } from './medicine/medicine.component';
import { ViewmedicinebyidComponent } from './viewmedicinebyid/viewmedicinebyid.component';
import { ViewmedicinebycategoryComponent } from './viewmedicinebycategory/viewmedicinebycategory.component';
import { AddmedbycatComponent } from './addmedbycat/addmedbycat.component';
import { LoginComponent } from './login/login.component';
import { GetcustomercartComponent } from './getcustomercart/getcustomercart.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DeletecartitemComponent } from './deletecartitem/deletecartitem.component';
import { EditcartComponent } from './editcart/editcart.component';



@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    ViewallcategoryComponent,
    CategoryComponent,
    MedicineComponent,
    ViewmedicinebyidComponent,
    ViewmedicinebycategoryComponent,
    AddmedbycatComponent,
    LoginComponent,
    GetcustomercartComponent,
    AddtocartComponent,
    DeletecartitemComponent,
    EditcartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
