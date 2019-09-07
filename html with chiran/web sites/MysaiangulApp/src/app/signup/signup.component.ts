import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public text:string="Registration Forms"
public producscheckboxs=[];
public proArray=[]
public radioGenders:string[];
public checksettings={};
public Submitted:boolean=false;
public success:string="Registration Form is successfilly submited"
public message:boolean=false;
public checkboxData:string;

 
  constructor() { }

  ngOnInit() {
    this.producscheckboxs=[{id:1,checs:'Red'},{id:2,checs:'White'},{id:3,checs:'Black'}]
    this.radioGenders=['Male','Female']
   
  }
  userDataForm = new FormGroup({

    name: new FormGroup({
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required)
  }),
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    retrypassword : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    checkbox:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required)
  })
 

  onSubmit(){
    this.Submitted=true
    this.message=true
    this.userDataForm.get('checkbox').setValue(this.proArray)
    // console.log(this.proArray)
console.log(this.userDataForm.value)
if(localStorage.getItem('userdata')== null){
let myregFormdata=[]
myregFormdata.push(this.userDataForm.value)
localStorage.setItem('userdata',JSON.stringify(myregFormdata))
}
else{
  let myObj =JSON.parse(localStorage.getItem('userdata'))
  myObj.push(this.userDataForm.value)
  localStorage.setItem('userdata',JSON.stringify(myObj))
}

  }
 
  onClicked(event){
    this.checkboxData= event.target.value
    
    if(event.target.type=='checkbox' && event.target.checked==true){
      event.target.checked=true
      this.proArray.push(this.checkboxData)
    }
    
    console.log("THIS IS ARRAY OF DATA IN CHECKBOX "+this.proArray)
  //   console.log("event is length =" +this.producscheckboxs.length)
    console.log("event is chehcked "+event.target.checked)
    console.log("event  checked " + this.checkboxData)
  //   for (var i = 0; i < this.producscheckboxs.length; i++) {
  //     console.log("test --- " + this.producscheckboxs[i].checs);
  //     if (this.producscheckboxs[i].checs == event.target.value) {
  //         this.producscheckboxs[i].checked = event.target.checked;
  //         console.log("this is sai")
  //     }
  //     console.log("after update of checkbox" + this.producscheckboxs[i].checked);

  // }
  
  
  }
}
