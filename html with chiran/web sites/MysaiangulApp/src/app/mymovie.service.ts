import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from './poster';


@Injectable({
  providedIn: 'root'
})
export class MymovieService {
// public url:string="http://www.omdbapi.com/?t=batman&apikey=2d2c9886"
  constructor(public http:HttpClient) { }
getmovies(data):Observable<IMovies[]>{
  return this.http.get<IMovies[]>("http://www.omdbapi.com/?t="+data.title+"&y="+data.year+"&type="+data.type+"&apikey=2d2c9886")
}
}
