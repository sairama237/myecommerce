import { Component, OnInit } from '@angular/core';
import { PosterService } from '../poster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  movieNotFound: string;

  constructor(private posterService : PosterService, private router : Router) { }
  public movies = [];
 
  public posterNotFound;

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
  ngOnInit() {
   
  }

  submitData(data){
    this.posterService.getMoviesData(data.value).subscribe(result=> {
      {
        if(result['Title']){
          this.movies.push(result);
        }
        else{
          this.posterNotFound="Title Not Found";
        }
      }
    })
  }

  viewSingleObject(data){
    this.router.navigate(['/posterDetails',data.Title,data.Year,data.Type])
  }
}
