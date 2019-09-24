import { Component, OnInit } from '@angular/core';
import { WomensService } from '../womens.service';

@Component({
  selector: 'app-womensdetails',
  templateUrl: './womensdetails.component.html',
  styleUrls: ['./womensdetails.component.css']
})
export class WomensdetailsComponent implements OnInit {
products=[]
  constructor( public service:WomensService) { }

  ngOnInit() {
  this.service.getMethod().subscribe((data)=>this.products =data)
  }
  addTocart(product){
    console.log(product)
  }
}
