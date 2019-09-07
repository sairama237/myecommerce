import { Component, OnInit } from '@angular/core';
import { ProductsdetailsService } from '../productsdetails.service';
import { Employeess } from '../employeess';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css']
})
export class ProductsdataComponent implements OnInit {
   public myemployee =[]
   public deletedata:string="product was deleted"
   isdeleted:boolean=false
  constructor(private service:ProductsdetailsService,private router:Router) {}

  ngOnInit() {
    this.service.getMethod().subscribe(res =>this.myemployee = res)
  }
  
  editEmployee(emp:Employeess){
    this.service.currentEmployee= Object.assign({}, emp);
    this.router.navigate(['addingproducts'])
  }
  deleteEmployee(id:number){
  this.service.deleteEmployee(id).subscribe(data => {this.service.getMethod()
  this.isdeleted=true})
  }
}
