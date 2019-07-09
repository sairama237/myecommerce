import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sai',
  templateUrl: './sai.component.html',
  styleUrls: ['./sai.component.css']
})
export class SaiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
companyName:string="Kundurthi software solutions"
companyAdress:string="doorno:403,Huda complex,saroornagar,shivalaya apt"
 public getEmployee(){
   return  'method calling....'
 }
}
