import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectnav',
  templateUrl: './projectnav.component.html',
  styleUrls: ['./projectnav.component.css']
})
export class ProjectnavComponent implements OnInit {
public myText:string="ECommerce CyberTech Pvt.Ltd"
  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    // console.log("this is sai")
    this.router.navigate(["/user"])
  }
}
