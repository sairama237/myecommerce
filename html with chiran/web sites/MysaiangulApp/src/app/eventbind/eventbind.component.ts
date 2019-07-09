import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
myMethod(value1,value2){
  alert(`getting value from viewpage to component-${value1}-${value2}`)
}
myAdd(fno,sno){
  var sum = Number(fno)+Number(sno);
  // alert(sum);
  console.log(sum);
}

mySub(fno,sno){
  var sum = Number(fno)-Number(sno);
  // alert(sum);
  console.log(sum);
}
myMul(fno,sno){
  var sum = Number(fno)*Number(sno);
  // alert(sum);
  console.log(sum);
}
myDiv(fno,sno){
  var sum = Number(fno)/Number(sno);
  // alert(sum);
  console.log(sum);
}
} 
