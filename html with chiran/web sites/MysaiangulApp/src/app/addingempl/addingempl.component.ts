import { Component, OnInit } from '@angular/core';
import { MyserviceempService } from '../myserviceemp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addingempl',
  templateUrl: './addingempl.component.html',
  styleUrls: ['./addingempl.component.css']
})
export class AddingemplComponent implements OnInit {

  constructor(public service:MyserviceempService,public router:Router) { }

  ngOnInit() {
  }
//   onFunction(data){
// // console.log(data)
// this.service.createuser(data).subscribe((data)=>{console.log(data)})
// this.router.navigate(['myEmployeedata'])
//   }
}
