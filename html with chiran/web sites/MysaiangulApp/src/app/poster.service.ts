import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PosterService {
  constructor(private httpClient :  HttpClient){ 

  }

  getMoviesData(data){
    return this.httpClient.get("http://www.omdbapi.com/?t="+data.title+"&y="+data.year+"&type="+data.type+"&apikey=2d2c9886")
  }

}