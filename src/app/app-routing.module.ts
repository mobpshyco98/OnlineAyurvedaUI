import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedSpecsComponent } from './add-med-specs/add-med-specs.component';

import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddmedbycatComponent } from './addmedbycat/addmedbycat.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { CategoryComponent } from './category/category.component';
import { CgGuard } from './cg.guard';
import { DeletecartitemComponent } from './deletecartitem/deletecartitem.component';
import { DeleteorderComponent } from './deleteorder/deleteorder.component';
import { EditMedSpecsComponent } from './edit-med-specs/edit-med-specs.component';
import { EditcartComponent } from './editcart/editcart.component';
import { GetcustomercartComponent } from './getcustomercart/getcustomercart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedSpecComponent } from './med-spec/med-spec.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';

import { ViewallordersComponent } from './viewallorders/viewallorders.component';
import { ViewbycustidComponent } from './viewbycustid/viewbycustid.component';
import { ViewbyorderidComponent } from './viewbyorderid/viewbyorderid.component';

import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewmedicinebycategoryComponent } from './viewmedicinebycategory/viewmedicinebycategory.component';
import { ViewmedicinebyidComponent } from './viewmedicinebyid/viewmedicinebyid.component';
import { ViewmedspecbyidComponent } from './viewmedspecbyid/viewmedspecbyid.component';
import { VieworderComponent } from './vieworder/vieworder.component';

const routes: Routes = [{path:'category',component:CategoryComponent,canActivate:[CgGuard],
                        children:[{path:'addcategory',component:AddcategoryComponent,canActivate:[CgGuard], data:{role:"admin"}},
                                  {path:'viewallcategory',component:ViewallcategoryComponent}]},
                                  
                        {path:'medicine',component:MedicineComponent,canActivate:[CgGuard],
                        children:[{path:'viewmedicinebycategory',component:ViewmedicinebycategoryComponent},
                                  {path:'viewmedicinebyid',component:ViewmedicinebyidComponent},
                                  {path:'addmedbycat',component:AddmedbycatComponent,canActivate:[CgGuard], data:{role:"admin"}}]},

                        {path:'login',component:LoginComponent},
                        {path:'profile',component:ViewcustomerComponent},

                        {path:'editcart/:cartId',component:EditcartComponent},
                        {path:'getcustomercart',component:GetcustomercartComponent,canActivate:[CgGuard],
                        children:[{path:'deletecartitem/:cartId',component:DeletecartitemComponent}]},
                        
                        {path:'medspecs',  component:MedSpecComponent,canActivate:[CgGuard],
                        children: [{path:'viewmedspecsbyid', component:ViewmedspecbyidComponent},
                                   {path:'addmedspecs', component: AddMedSpecsComponent,canActivate:[CgGuard], data:{role:"admin"}},
                                   {path:'editmedspecs', component: EditMedSpecsComponent,canActivate:[CgGuard], data:{role:"admin"}}]},
                                   
                        { path: 'vieworder', component: VieworderComponent, canActivate:[CgGuard],
                          children: [{ path: 'bycustid', component: ViewbycustidComponent },
                                     { path: 'byorderid', component: ViewbyorderidComponent },
                                     { path: 'allorders', component: ViewallordersComponent}]},
                        { path: 'deleteorder', component: DeleteorderComponent },

                        {path: 'removeorder', component: CancelOrderComponent, canActivate:[CgGuard]},

                        {path: '', component: HomeComponent}
                                   
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
