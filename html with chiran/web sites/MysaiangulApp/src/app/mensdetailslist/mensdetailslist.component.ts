import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensdetailslist',
  templateUrl: './mensdetailslist.component.html',
  styleUrls: ['./mensdetailslist.component.css']
})
export class MensdetailslistComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  
  }

  addCart(){
    console.log("this is card data")
   
  }
  buyNow(){
    console.log("this is card datas")
  }
}
