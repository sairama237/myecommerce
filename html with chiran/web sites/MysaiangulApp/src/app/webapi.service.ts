import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
public url:string="https://api.unsplash.com/photos/?client_id=ae347936a326b0f23a06bdfe79421f0c3b3f7bf1283cc9d75721f2eda2ebe252"

  constructor(private myhttp:HttpClient) { }
  getwepapi():Observable<any>{
    return this.myhttp.get<any>(this.url)
    
  }
  addimagetocart(Images:any){
    localStorage.setItem("image",JSON.stringify(Images))
  }
  addtocart(){ 
  return JSON.parse(localStorage.getItem('image'))
  }
  removetocart(){
    return localStorage.removeItem('image')
  }
}
