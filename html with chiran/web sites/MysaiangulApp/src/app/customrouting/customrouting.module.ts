import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoiveComponent } from '../moive/moive.component';
import { MoviedetailslistComponent } from '../moviedetailslist/moviedetailslist.component';
import { MyemplyeedataComponent } from '../myemplyeedata/myemplyeedata.component';


const myRoutes:Routes=[
 
  {
    path : "search-movies",
    component: MoiveComponent
  },
  {
    path : "posterDetails/:title/:year/:type",
    component:MoviedetailslistComponent
  }
]
@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(myRoutes)],
  exports:[RouterModule]
})
export class CustomroutingModule { } 
// export const myroutin =[MoiveComponent,MoviedetailslistComponent]
