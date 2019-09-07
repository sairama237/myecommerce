import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirectives]'
})
export class CustomdirectivesDirective {

  constructor( private sai:ElementRef, private renderer:Renderer) {
    // renderer.setElementStyle(el.nativeElement,'color','red');
                // or
      sai.nativeElement.style.color = "yellow";

    // renderer.setElementStyle(sai.nativeElement,'background-color',"red")
    // renderer.setElementStyle(sai.nativeElement,'border',"20px solid red")
    // renderer.setElementStyle(sai.nativeElement,'padding',"30px")
    // renderer.setElementStyle(sai.nativeElement,'background-image',"url(https://www.star-registration.com/media/product/default/swarovski_star_4.jpg)")
    // renderer.setElementStyle(sai.nativeElement,'background-repeat','no-repeat');
    
   }
   @HostListener('mouserOver') onMouseOver(){
    this.renderer.setElementStyle(this.sai.nativeElement,'background-color',"orange")
  }
  @HostListener('mouserLeave') onMouseLeave(){
    this.renderer.setElementStyle(this.sai.nativeElement,'background-color',"pink")
  }
}
