import { Component, OnInit } from '@angular/core';
import { MycrudService } from '../mycrud.service';
import { Postd } from '../postd';


@Component({
  selector: 'app-crudempform',
  templateUrl: './crudempform.component.html',
  styleUrls: ['./crudempform.component.css']
})
export class CrudempformComponent implements OnInit {

public employee:Postd
  constructor(private service:MycrudService) { }

  ngOnInit() {
    console.log(this.employee=this.service.getter())
    this.employee=this.service.getter();
  }

onEmpdata(employee:Postd){
// console.log(employee)
if(employee.id == undefined){
 this.service.postEmp(this.employee).subscribe((data) =>console.log("insertdata"+data))
}
 else{
  this.service.updateEmp(this.employee).subscribe((data) =>console.log("updatedata"+data))
   
 }
  }
  
}
