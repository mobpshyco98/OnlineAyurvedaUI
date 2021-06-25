import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddmedbycatComponent } from './addmedbycat/addmedbycat.component';
import { CategoryComponent } from './category/category.component';
import { DeletecartitemComponent } from './deletecartitem/deletecartitem.component';
import { GetcustomercartComponent } from './getcustomercart/getcustomercart.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';
import { ViewmedicinebycategoryComponent } from './viewmedicinebycategory/viewmedicinebycategory.component';
import { ViewmedicinebyidComponent } from './viewmedicinebyid/viewmedicinebyid.component';

const routes: Routes = [ {path:'category',component:CategoryComponent,
                          children:[{path:'addcategory',component:AddcategoryComponent},
                                    {path:'viewallcategory',component:ViewallcategoryComponent}]},
                         {path:'medicine',component:MedicineComponent,
                          children:[{path:'viewmedicinebycategory',component:ViewmedicinebycategoryComponent},
                                    {path:'viewmedicinebyid',component:ViewmedicinebyidComponent},
                                    {path:'addmedbycat',component:AddmedbycatComponent}]},
                         {path:'login',component:LoginComponent},
                         {path:'getcustomercart',component:GetcustomercartComponent,
                         children:[{path:'deletecartitem/:cartId',component:DeletecartitemComponent},
                                   
                                 ]},];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
