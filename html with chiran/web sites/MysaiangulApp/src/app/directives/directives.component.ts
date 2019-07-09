import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public showElement:boolean=true;
public Course:string = "java";
public names:string[]=['uday','chiru','suresh kumar',"ramalingeswara rao","sai","bhanumathi devi","joshi"];

}
