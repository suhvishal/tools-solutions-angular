import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')
  private bgColor: string = 'bisque';


  @HostListener('mouseover')
  public onMouseOver(){
    this.bgColor = 'yellow'
  }

  @HostListener('mouseout')
  public onMouseOut(){
    this.bgColor = 'bisque';
  }

  constructor(private elementRef:ElementRef) {
    //console.log('directive is instantiated...') 
    //console.log(this.elementRef.nativeElement)
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow'
  }

}
