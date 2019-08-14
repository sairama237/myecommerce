import { Component, OnInit } from '@angular/core';
import { ProductsdetailsService } from '../productsdetails.service';
import { Employeess } from '../employeess';

@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css']
})
export class ProductsdataComponent implements OnInit {
   public myemployee =[]

  constructor(private service:ProductsdetailsService) {}

  ngOnInit() {
    this.service.getMethod().subscribe(res =>this.myemployee = res)
  }
  
  editEmployee(emp:Employeess){
    this.service.currentEmployee= Object.assign({}, emp);
  }
}
