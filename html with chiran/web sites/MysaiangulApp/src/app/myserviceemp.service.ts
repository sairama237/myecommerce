import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,} from '@angular/common/http'
import {  Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class MyserviceempService {
public url:string="assets/data/employeedata.json";
public produrl:string ="http://localhost:3000/products"

public headers = new HttpHeaders({'Content-Type':'application/json'});
public options = {headers:this.headers}

constructor(private http:HttpClient) { }
// get method
  getProducts(){
    return this.http.get(this.produrl)
  }
  // post method
  postProductsData(data){
    console.log("comming from services : " + data)
    return this.http.post(this.produrl,data).pipe(map(res=>res))
    // return this.http.post(this.produrl,data)
  } 

  editProductsData(data){
    return this.http.put(this.produrl,data)
  }
  getProductId(prduid){
    console.log("comming from services ID"+prduid)
    console.log("comming from services URL"+this.produrl+'?id=' + prduid)
    return this.http.get(this.produrl+'?id=' + prduid).pipe(map(data=>data))
    
  }





  // constructor(private http:HttpClient) { }
  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }
  createuser(data):Observable<IEmployee[]>{
    return this.http.post<IEmployee[]>(this.url,data,this.options)
  }
}
