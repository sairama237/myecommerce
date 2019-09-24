import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehavioursubService } from '../behavioursub.service';

@Component({
  selector: 'app-projectnav',
  templateUrl: './projectnav.component.html',
  styleUrls: ['./projectnav.component.css']
})
export class ProjectnavComponent implements OnInit {
public myText:string="ECommerce CyberTech Pvt.Ltd"
public time = new Date()
public countdata
  constructor(private router:Router,public localservice:BehavioursubService) { }

  ngOnInit() {
    this.time.getMinutes
    this.localservice.images.subscribe(countnum =>this.countdata =countnum)
  }
  logout(){
    // console.log("this is sai")
    this.router.navigate(["/user/signin"])
  }
}
