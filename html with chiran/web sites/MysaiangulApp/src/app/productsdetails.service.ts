import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employeess } from './employeess';

@Injectable({
  providedIn: 'root'
})
export class ProductsdetailsService {
Urls:string="http://localhost:3000/Employee";
currentEmployee: Employeess = {
  id: null,
  firstName: '',
  lastName: '',
  code: '',
  contactNumber: null,
  address: ''
}

  constructor( private http:HttpClient) { }
  getMethod(){
return this.http.get<Employeess[]>(this.Urls)
  }
  //create emp data
  createEmp(employess:Employeess):Observable<Employeess[]>{
    return this.http.post<Employeess[]>(this.Urls,employess)
  }
  //update emp data
  update(employess:Employeess):Observable<Employeess>{
    return this.http.put<Employeess>(this.Urls+ '/' + employess.id, employess)
  }
}
