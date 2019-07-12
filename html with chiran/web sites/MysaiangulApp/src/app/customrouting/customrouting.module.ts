import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoiveComponent } from '../moive/moive.component';
import { MoviedetailslistComponent } from '../moviedetailslist/moviedetailslist.component';

const myRoutes:Routes=[
  {
    path:"seach-movie-title",
    component:MoiveComponent
  },
  {
    path:"moviedetails/:title/:year/:type",
    component:MoviedetailslistComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  exports:[RouterModule]
})
export class CustomroutingModule { } 
