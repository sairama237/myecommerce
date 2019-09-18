import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public url:string ="http://localhost:3000/products"
  constructor(public http:HttpClient) { }
}
// sendingdata(Signupdata){
//   return this.http.post<Signup[]>(this.url,Signupdata);
// }
