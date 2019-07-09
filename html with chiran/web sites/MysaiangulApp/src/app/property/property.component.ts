import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 public myImage = "https://www.thetelugufilmnagar.com/wp-content/uploads/2018/04/The-Rise-of-a-Super-Celebrity.jpg";
public myImages = "../assets/img1.jpg";
public mypics = "./assets/saiimage.png";
public title = "Welcome to our property binding"
public subtitle = "by using internal images"
company ={name:"infosys",Descrption:"infosystem is one of most MNC company",Age:27};
}
