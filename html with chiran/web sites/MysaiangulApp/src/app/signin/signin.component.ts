import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  onsubmit(data){
    console.log(data)
  }
  onSubmits(){
    console.log('hi')
    this.router.navigate(["/user/signup"])

  }
}
