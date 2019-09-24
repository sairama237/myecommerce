import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productwomen } from './productwomen';

@Injectable({
  providedIn: 'root'
})
export class WomensService {
  public url:string="assets/data/productdata.json";

  constructor( public http:HttpClient) { }
  getMethod():Observable<Productwomen[]>{
    return this.http.get<Productwomen[]>(this.url)
  }
}
