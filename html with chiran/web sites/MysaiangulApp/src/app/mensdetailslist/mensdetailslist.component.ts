import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-mensdetailslist',
  templateUrl: './mensdetailslist.component.html',
  styleUrls: ['./mensdetailslist.component.css']
})
export class MensdetailslistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  addCart(){
    console.log("this is card data")
  }
  buyNow(){
    console.log("this is card datas")
  }
}
