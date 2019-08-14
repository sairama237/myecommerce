import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-mensdetails',
  templateUrl: './mensdetails.component.html',
  styleUrls: ['./mensdetails.component.css']
})
export class MensdetailsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  seemore(){
    this.router.navigate(['/mensdetails'])
  }
}
