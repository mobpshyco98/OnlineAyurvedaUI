import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetcustomercartComponent } from './getcustomercart/getcustomercart.component';
import { FormsModule } from '@angular/forms';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DeletecartitemComponent } from './deletecartitem/deletecartitem.component';
import { EditcartComponent } from './editcart/editcart.component';
import { ViewmedicinebycategoryComponent } from './viewmedicinebycategory/viewmedicinebycategory.component';

@NgModule({
  declarations: [
    AppComponent,
    GetcustomercartComponent,
    AddtocartComponent,
    DeletecartitemComponent,
    EditcartComponent,
    ViewmedicinebycategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
