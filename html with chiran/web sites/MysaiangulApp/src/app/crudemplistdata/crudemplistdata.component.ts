import { Component, OnInit } from '@angular/core';
import { MycrudService } from '../mycrud.service';

@Component({
  selector: 'app-crudemplistdata',
  templateUrl: './crudemplistdata.component.html',
  styleUrls: ['./crudemplistdata.component.css']
})
export class CrudemplistdataComponent implements OnInit {
public myemployeedata;
  constructor(private myservice:MycrudService) { 
    // console.log(this.myservice)
  }

  ngOnInit() {
    this.myservice.getEmplmet()
    .subscribe(data =>this.myemployeedata=data)
  }
  update(employee){
    // console.log(employee)
    this.myservice.setter(employee)
  }
}
