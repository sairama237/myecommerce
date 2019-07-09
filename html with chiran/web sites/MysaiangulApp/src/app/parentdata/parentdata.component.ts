import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentdata',
  templateUrl: './parentdata.component.html',
  styles: [`div{
    background:red;
    padding:20px;
    width:150px;
  }`]
})
export class ParentdataComponent implements OnInit {
  name1:string="sai kumar"
  childData:any;
  myparMethod(data){ 
    this.childData = data
  }
  constructor() { }
  
  ngOnInit() {
  }

}
