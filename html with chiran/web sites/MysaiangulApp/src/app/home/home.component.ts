import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
textarea:string ="Welcome to our bussiness center you will learn how to make a website. We offer free tutorials in all web development technologies."

  constructor() { }

  ngOnInit() {
  }

}
