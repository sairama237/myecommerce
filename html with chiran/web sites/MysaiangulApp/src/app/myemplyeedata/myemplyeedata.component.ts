import { Component, OnInit } from '@angular/core';
import { MyserviceempService } from '../myserviceemp.service';

@Component({
  selector: 'app-myemplyeedata',
  templateUrl: './myemplyeedata.component.html',
  styleUrls: ['./myemplyeedata.component.css']
})
export class MyemplyeedataComponent implements OnInit {
public myEmployee = []
  constructor(private emp:MyserviceempService) { }

  ngOnInit() {
    this.emp.getEmployee()
    .subscribe(result => this.myEmployee=result)
  }


}
