import { Component, OnInit, Output } from '@angular/core';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-imageswithapi',
  templateUrl: './imageswithapi.component.html',
  styleUrls: ['./imageswithapi.component.css']
})
export class ImageswithapiComponent implements OnInit {
public myIamges;
  constructor( private myweb: WebapiService) {console.log(this.myweb) }
  
  ngOnInit() {
    this.myweb.getwepapi()
    .subscribe(output => 
     // console.log(output)
      this.myIamges = output
      )
     
    
  }
  
}
