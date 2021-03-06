import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { MymovieService } from '../mymovie.service';

@Component({
  selector: 'app-moviedetailslist',
  templateUrl: './moviedetailslist.component.html',
  styleUrls: ['./moviedetailslist.component.css']
})
export class MoviedetailslistComponent implements OnInit {
public myMoviedetails;
  constructor(private avtivated:ActivatedRoute, private myService:MymovieService,private routers:Router) { }

  ngOnInit() {
    console.log(this.avtivated.snapshot.params)
    this.myService.getmovies(this.avtivated.snapshot.params)
    .subscribe(resultImg => this.myMoviedetails = [resultImg])
  }
  goback(){
    this.routers.navigate(['/search-movies'])
  }

}
