import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childdata',
  templateUrl: './childdata.component.html',
  styles: [`p{
    background:lightgreen;
    padding:50px;
    width:150px
  }`]
})
export class ChilddataComponent implements OnInit {
  @Input()
  uname:string
  myobjec:any ={id:1,name:"sai",age:27,havingcar:true}
  @Output() myNotify:EventEmitter<any> = new EventEmitter<any>();
  passData(){
    this.myNotify.emit(this.myobjec)
  }
  constructor() { }

  ngOnInit() {
  }

}
