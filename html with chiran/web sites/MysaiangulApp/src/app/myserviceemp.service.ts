import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class MyserviceempService {
public url:string="assets/data/employeedata.json"

  constructor(private http:HttpClient) { }
  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }
}
