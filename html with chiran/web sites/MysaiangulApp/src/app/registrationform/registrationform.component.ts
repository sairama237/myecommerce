import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
   langs:string[] = [
    'English',
    'French',
    'German',
];

userModel = new User('sai','saisasank','sai.kundurthi232@gmail.com',9642369410,true,true)

  mybtton(userForm){
    // console.log(userForm);
    console.log(userForm.value);
    // localStorage.setItem('key',JSON.stringify(userForm.value))
    // this.mydata.push(localStorage.getItem('key'))
    // console.log(this.mydata)

    if(localStorage.getItem('mydata') == null){
      let myarray=[]
      myarray.push(userForm.value)
      localStorage.setItem('mydata',JSON.stringify(myarray))// "name":"sai","age":24 json file
    }
    else{
      let data = JSON.parse(localStorage.getItem('mydata')); // name:"sai",age:24 string file
      data.push(userForm.value)
      localStorage.setItem('mydata',JSON.stringify(data))
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
