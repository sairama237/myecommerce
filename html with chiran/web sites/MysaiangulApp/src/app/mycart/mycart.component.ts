import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { BehavioursubService } from '../behavioursub.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  imageaddtocart:any 
  constructor( public service:WebapiService,public localservice:BehavioursubService) { } 
number:any
  ngOnInit() {
    this.imageaddtocart =this.service.addtocart()
    this.localservice.images.subscribe((datas) =>this.number =datas)

    for(let i in this.imageaddtocart){
      this.imageaddtocart[i].urls.raw
    }
    this.service.removetocart()
    this.service.addimagetocart(this.imageaddtocart)
  }
  onAddid(imgcart){
    // this.imageaddtocart = this.service.addtocart()
    //  this.imageaddtocart.find(p =>p.id == imgcart.id).id= imgcart.id+1
    // this.service.removetocart()
    // this.service.addimagetocart(this.imageaddtocart)
  }
  onDelete(imgcart){
    // console.log("this is from mycart component data is "+imgcart.id)
    this.imageaddtocart = this.service.addtocart()
     this.imageaddtocart.find(p =>p.id == imgcart.id).id= imgcart.id-1
    this.service.removetocart()
    this.service.addimagetocart(this.imageaddtocart)

  }
}
