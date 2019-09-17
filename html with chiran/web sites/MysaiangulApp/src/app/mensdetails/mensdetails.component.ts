import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-mensdetails',
  templateUrl: './mensdetails.component.html',
  styleUrls: ['./mensdetails.component.css']
})
export class MensdetailsComponent implements OnInit {

  constructor( public webApi:WebapiService,public router:Router) { }
   public webImages=[]
  ngOnInit() {

    this.webApi.getwepapi().subscribe(images =>this.webImages=images)
  }
  addCart(Image){
    console.log(Image)

  }
}
