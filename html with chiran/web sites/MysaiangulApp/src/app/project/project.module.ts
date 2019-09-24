import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserdataComponent } from '../userdata/userdata.component';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MensdetailsComponent } from '../mensdetails/mensdetails.component';
import { WomensdetailsComponent } from '../womensdetails/womensdetails.component';
import { ProductsdataComponent } from '../productsdata/productsdata.component';
import { AddingproducsdetailsComponent } from '../addingproducsdetails/addingproducsdetails.component';
import { MensdetailslistComponent } from '../mensdetailslist/mensdetailslist.component';
import { PaymentgatewayComponent } from '../paymentgateway/paymentgateway.component';
import { MycartComponent } from '../mycart/mycart.component';
const myRoutes:Routes=[
  {
    path:"",
    component:SigninComponent
  },
  {
    path:"Home",
    component:HomeComponent
  },
  
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {path:"user",component:UserdataComponent,
  children:[{path:"signup",component:SignupComponent},
            {path:"signin",component:SigninComponent}]
},
{
  path:"user/signin",
  component:SigninComponent
},
{
  path:"user/signup",
  component:SignupComponent
},


{
  path:"mens",
  component:MensdetailsComponent
},
{
  path:"womens",
  component:WomensdetailsComponent
},
{
  path:"productsdata",
  component:ProductsdataComponent
},
{
  path:"addingproducts",
  component:AddingproducsdetailsComponent
},
{
  path:"mensdetails",
  component:MensdetailslistComponent
},
{
  path:"mycart",
  component:MycartComponent
},
{
  path:"payment",
  component:PaymentgatewayComponent
}


// {path:'',component:SigninComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(myRoutes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class ProjectModule { }
