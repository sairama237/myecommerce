import { Component, OnInit } from '@angular/core';
import { ProductsdetailsService } from '../productsdetails.service';
import { Employeess } from '../employeess';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-addingproducsdetails',
  templateUrl: './addingproducsdetails.component.html',
  styleUrls: ['./addingproducsdetails.component.css']
})
export class AddingproducsdetailsComponent implements OnInit {
  public confirmationstring:string ="New product is added in prodcuts"
isAdded:boolean=false

  constructor(private serivces:ProductsdetailsService,private routers:Router) { }

  ngOnInit() {
  }
 
   
  createEmployee(currentEmployee: Employeess){
    if(currentEmployee.id === null){
    this.serivces.createEmp(currentEmployee).subscribe((data) => {this.serivces.getMethod()
    this.isAdded =true})
  }
  else{
    this.serivces.update(currentEmployee).subscribe(data =>this.serivces.getMethod())
  }
  }

  clearEmployee(currentEmployee: Employeess) {
    this.serivces.currentEmployee = {
      id: null,
      firstName: '',
      lastName: '',
      code: '',
      contactNumber: null,
      address: ''
    }
  }
  goback(){
    this.routers.navigate(['/productsdata'])
  }
}
