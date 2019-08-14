import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MyserviceempService } from '../myserviceemp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  
  constructor(private fb:FormBuilder,private dataService : MyserviceempService, private activatedRoute:ActivatedRoute) { }

  public productForm;
  public ProductId;
  public productData;
  ngOnInit(){
  //this.ProductId = this.activatedRoute.snapshot.queryParams['id']
   //this.activatedRoute.params.subscribe(res=>this.ProductId = res.id)
  
  //this.ProductId = this.activatedRoute.params.subscribe(res=>console.log(res))
  this.activatedRoute.paramMap.subscribe(params=>this.ProductId=params.get('id'))
  if(this.ProductId != undefined){
   this.productForm = this.dataService.getProductId(this.ProductId).subscribe(
     res => {
      this.productForm = this.fb.group({
        productTitle : [res[0]['productTitle'],Validators.required],
        productPrice : [res[0]['productPrice'],Validators.required]
      })
       console.log(res)
       console.log(res[0]['productTitle'])
    }
   )
  }
  else{
    this.productForm = this.fb.group({
      productTitle : ['',Validators.required],
      productPrice : ['',Validators.required]
    })
    
  }

  this.productForm = new FormGroup({
    productTitle : new FormControl('',Validators.required),
    productPrice : new FormControl('',Validators.required)
  })
   
  }
  public submitted : boolean = false;
  productFormData(){
    if(this.productForm.id == null){
    this.dataService.postProductsData(this.productForm.value)
    .subscribe(res => res)
  }
  else{
    this.dataService.editProductsData(this.productForm.value)
    .subscribe(res => res)
  }

}
}
