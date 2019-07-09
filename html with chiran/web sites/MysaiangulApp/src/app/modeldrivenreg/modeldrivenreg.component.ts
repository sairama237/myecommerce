import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldrivenreg',
  templateUrl: './modeldrivenreg.component.html',
  styleUrls: ['./modeldrivenreg.component.css']
})
export class ModeldrivenregComponent implements OnInit {

  submitted =false;
  
  userForm = new FormGroup({
    username: new FormControl('sai',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    password: new FormControl('sasanksai',[Validators.required]),
    retrypassword: new FormControl('sasanksai'),
    email: new FormControl('sai237@gmail.com',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{4,6}+@[a-zA-Z0-9]+.(com|live.com)')]),
    phone: new FormControl(9642369940),
    usergroup:new FormControl('Male'),
    usergroups:new FormControl('Female'),
    address: new FormGroup({
      street: new FormControl("hudacomplex"),
      pincode: new FormControl(523002),
      city: new FormControl("Hyderabad"),
    })
  })
  onSubmit() {
    this.submitted =true
    console.log(this.userForm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
