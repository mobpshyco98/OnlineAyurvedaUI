import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DeletecartitemComponent } from './deletecartitem/deletecartitem.component';
import { EditcartComponent } from './editcart/editcart.component';
import { GetcustomercartComponent } from './getcustomercart/getcustomercart.component';
import { ViewmedicinebycategoryComponent } from './viewmedicinebycategory/viewmedicinebycategory.component';

const routes: Routes = [{path:'addtocart',component: AddtocartComponent},
                        {path:'getcustomercart',component:GetcustomercartComponent,
                                        children:[{path:'deletecartitem/:cartId',component:DeletecartitemComponent},
                                                  
                                                ]},
                        {path:'viewbycategory',component:ViewmedicinebycategoryComponent},
                        {path:'getcustomercart',redirectTo:'getcustomercart'},
                        {path:'editcart/:cartId',component:EditcartComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
