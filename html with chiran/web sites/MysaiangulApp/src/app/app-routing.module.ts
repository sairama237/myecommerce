import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosterViewDetailsComponent } from './poster-view-details/poster-view-details.component';
import { PosterComponent } from './poster/poster.component';

const routes: Routes = [
  {
    path : "search-movies",
    component : PosterComponent
  },
  {
    path : "posterDetails/:title/:year/:type",
    component : PosterViewDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
