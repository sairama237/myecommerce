import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postd } from './postd';
import { Iuser } from './iuser';
@Injectable({
  providedIn: 'root'
})
export class MycrudService {
public myurl:string="http://localhost:3000/posts";
// public myurl:string="http://localhost:3000/employees";
// private headers = new HttpHeaders({'Content-Type':'application/json'});
//   private options = new HttpRequest({headers:this.headers});

private employee =new Postd()


  constructor(private http:HttpClient) { }

  //Get method of employee data
  getEmplmet():Observable<Iuser[]>{
   return this.http.get<Iuser[]>(this.myurl)
 }
 //Post method of employee data
 postEmp(employee:Postd):Observable<Iuser[]>{ 
   return this.http.post<Iuser[]>(this.myurl,employee)
 }
 //Put method of employee data
 updateEmp(employee:Postd):Observable<Iuser[]>{ 
  return this.http.put<Iuser[]>(this.myurl,employee)
}

setter(employee:Postd){
  this.employee=employee
//  console.log(this.employee=employee)
  // console.log("this form table data"+employee)
}
getter(){
  return this.employee;
}
}
