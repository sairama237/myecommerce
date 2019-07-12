import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PosterService } from '../poster.service';

@Component({
  selector: 'app-poster-view-details',
  templateUrl: './poster-view-details.component.html',
  styleUrls: ['./poster-view-details.component.css']
})
export class PosterViewDetailsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router : Router, private posterService : PosterService) { }

  public posterViewDetails;
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params)
    this.posterService.getMoviesData(this.activatedRoute.snapshot.params)
    .subscribe(result => this.posterViewDetails = [result])
  }
  goback(){
    this.router.navigate(['/search-movies'])
  }
}

