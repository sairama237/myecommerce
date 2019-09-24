import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router:Router,public service:SignupService) { }

  ngOnInit() {
  }
  onsubmit(data){
    this.service.loginData(data).subscribe((datas)=>{this.router.navigate(['/Home'])})
  }
  onSubmits(){
    console.log('hi')
    this.router.navigate(["/user/signup"])

  }
}
