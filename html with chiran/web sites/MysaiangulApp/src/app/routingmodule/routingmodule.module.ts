import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from'@angular/router';
import {HomeComponent} from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { RegistrationformComponent } from '../registrationform/registrationform.component';
import { ParentComponent } from '../parent/parent.component';
import { ReactiveformsComponent } from '../reactiveforms/reactiveforms.component';




const routes:Routes =[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
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
  {
    path:"Registrationform",
    component:RegistrationformComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"parent",
    component:ParentComponent
  },
  {
    path:"reactive",
    component:ReactiveformsComponent
  },

  {
    path:"**",
    component:PagenotfoundComponent
  }
  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingmoduleModule { }
export const myroutings =[HomeComponent,AboutComponent,ContactComponent,SigninComponent,SignupComponent]