import { Component, OnInit } from '@angular/core';
import { MymovieService } from '../mymovie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moive',
  templateUrl: './moive.component.html',
  styleUrls: ['./moive.component.css']
})
export class MoiveComponent implements OnInit {
myMovies=[]
public movieTypes = [
  {
    "movieId" : 1,
    "movieType" : "movie"
  }, 
  {
    "movieId" : 2,
    "movieType" : "series"
  },
  {
    "movieId" : 3,
    "movieType" : "episode"
  }
]
  constructor(public mycon:MymovieService,private router : Router) { }

  ngOnInit() {

  }
  onSubmit(data){
    // console.log(data)
    this.mycon.getmovies(data)
.subscribe(result => this.myMovies = [result])
  }
  viewFullPage(data){
    console.log(data)
    this.router.navigate(['/posterDetails',data.Title,data.Year,data.Type])
   
  }
}
