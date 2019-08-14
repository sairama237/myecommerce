import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { MyemplyeedataComponent } from '../myemplyeedata/myemplyeedata.component';
import { AddingemplComponent } from '../addingempl/addingempl.component';
import { AddproductComponent } from '../addproduct/addproduct.component';
const myPath:Routes=[
  // {
  //   path:"myEmployeedata",
  //   component:MyemplyeedataComponent
  // },
  // {
  //   path:"addingemploy",
  //   component:AddingemplComponent
  // },
  {
    path : "products",
    component :  AddproductComponent 
  },
  {
    path : "products/:id",
    component :  AddproductComponent 
  }
 
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(myPath)
  ],
  exports:[RouterModule]
})
export class CrudoperationModule { }
