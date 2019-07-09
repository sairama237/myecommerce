import { Component, OnInit } from '@angular/core';
import { MyserviceempService } from '../myserviceemp.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 public myparen = []
  constructor(private mycompent:MyserviceempService) { }

  ngOnInit() {
    this.mycompent.getEmployee()
    .subscribe(resu => this.myparen = resu)
   
  }

}
