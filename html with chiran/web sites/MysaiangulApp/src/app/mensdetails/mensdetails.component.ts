import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WebapiService } from '../webapi.service';
import { BehavioursubService } from '../behavioursub.service';

@Component({
  selector: 'app-mensdetails',
  templateUrl: './mensdetails.component.html',
  styleUrls: ['./mensdetails.component.css']
})
export class MensdetailsComponent implements OnInit {

  constructor(public webApi: WebapiService, public router: Router, public cartservice: BehavioursubService) { }
  public webImages = []
  Images: any
  addedtocart = false
  imageaddtocart: any
  alert = [];
  alertmessage =false
  cartiteamCout: number
  ngOnInit() {

    this.webApi.getwepapi().subscribe(images => this.webImages = images)
  }
  addCart(Image) {
    console.log(Image.urls.raw, Image.user.name, Image.id)
    // this.router.navigate(['mycart'])
    this.alertmessage=true
    this.imageaddtocart = this.webApi.addtocart()
    // starting data in local storage these if condition is exeucted 
    if (this.imageaddtocart == null) {
      this.imageaddtocart = []
      this.imageaddtocart.push(Image)
      this.webApi.addimagetocart(this.imageaddtocart)
      this.alert.push({
        id: 1,
        type: "success",
        message: "image is add to cart"
      })
      setTimeout(() => { this.closealert(this.alert) }, 3000)
    }

    //  if there is New items in the local storage  the else condition will exected

    else {
      let newImage = this.imageaddtocart.find(i => i.id == Image.id)
      if (newImage == null) {
        this.imageaddtocart.push(Image)
        this.webApi.addimagetocart(this.imageaddtocart);
        this.alert.push({
          id: 1,
          type: "success",
          message: "image is add to cart"
        })
        setTimeout(() => { this.closealert(this.alert) }, 3000)

      }
      else
        this.alert.push({
          id: 2,
          type: "waring",
          message: "image is already added to cart"
        })
      setTimeout(() => { this.closealert(this.alert) }, 3000)
    }
    this.cartiteamCout = this.imageaddtocart.length
    this.cartservice.updatecartCout(this.cartiteamCout)


  }
  public closealert(alert: any) {
    const index: number = this.alert.indexOf(alert)
    this.alert.splice(index, 1)

  }

  buyCart(Image) {
    // console.log("this is data from menstopayment"+ Image.user.name)
    this.router.navigate(['payment'])
  }
}
