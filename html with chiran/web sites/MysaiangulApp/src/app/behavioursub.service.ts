import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BehavioursubService {
  imageRef = new BehaviorSubject<any>([]);

  images = this.imageRef.asObservable() 
  constructor() {
  
   }
  
  //  addtocart(Image){
  //    this.images.forEach((e)=>{
  //      if(e.Image.id == Image.id){
  //        e.Image.urls.raw = Image.urls.raw
  //      }
  //     })

  //  }
  updatecartCout(count:number){
this.imageRef.next(count)
  }

}
