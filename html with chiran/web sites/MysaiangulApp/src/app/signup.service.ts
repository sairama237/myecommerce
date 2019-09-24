import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public url:string ="http://localhost:3004/Signup";
  public loginapi:string ="http://localhost:3001/Signin"
  constructor(public http:HttpClient) { }

        //Signup data from  signup component 
  registredData(data){
    return this.http.post(this.url,data);
  }
         //Signin data from  signin component 
  loginData(datas){
    return this.http.post(this.loginapi,datas);
  } 

}

