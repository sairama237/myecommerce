import { Component, OnInit } from '@angular/core';
import { MyserviceempService } from '../myserviceemp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {
public myProducts
  constructor(private myservice:MyserviceempService, private router:Router) { }

  ngOnInit() {
    this.myservice.getProducts()
    .subscribe(result => this.myProducts=result)
  }
  action(data){
    // console.log(data)

  console.log(  this.router.navigate(['/products/'+data.id]) )
    //this.myservice.editProductsData(data.id)
    //,{queryParams:{id:data.id}}
  }
}
