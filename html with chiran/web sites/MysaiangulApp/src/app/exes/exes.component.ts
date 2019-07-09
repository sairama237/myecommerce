import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { timeout } from 'q';

@Component({
  selector: 'app-exes',
  template: `<div [class.myClass] ="applyclass">Apply class level binding</div>
  <div [style.color]="applyblue?'blue':orange">Blue</div>
  <h2 > predefined pipes </h2>
  <h2> {{myName |uppercase }}</h2>
  <h2> {{myNumber |number:'1.3-3' }}</h2>
  <h2> {{myNumber |number:'2.4-4' }}</h2>
  <h2> {{myNumber |number:'2.1-2' }}</h2>
  <h2> {{myPrice |currency:'IND':true }}</h2>
  <h2> {{myPrice |currency:'EUR' }}</h2>
   <h2> {{myDate |date }}</h2>
   <h2> {{myDate |date:'fullDate' }}</h2>
   <h2> {{myDate |date:'yyyy/MM/dd' }}</h2>
   <h2> {{myDate |date:'HH:MM:ss' }}</h2>
   <h2> {{myjson|json}}`,
  styles: [`.myClass{color:blue; }`]
})
export class ExesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public myName:string = "welcome"
public myNumber:number= 9.636
public myPrice:number= 5000
public myamount:number= 9000
public myDate:Date= new Date()
public myjson:object={"name":"suresh","age":45,"id":103,}
public applyclass = true
public applyblue = false
}
