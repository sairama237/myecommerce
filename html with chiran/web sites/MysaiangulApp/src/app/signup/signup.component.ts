import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public producscheckbox=[
  {
'productId':1,
'pchecbox' : "Red"
  },
  {
    'productId':2,
    'pchecbox' : "Yellow"
  },
  {
    'productId':3,
    'pchecbox' : "White"
  }
]
  constructor() { }

  ngOnInit() {
  }
  // signuppage(data){
  //   console.log("this is coming from signup page" +data)
  // }
  onSubmit(data){
console.log(data)
  }
}
