import { Directive,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBtnDirect]'
})
export class BtnDirectDirective {

  constructor(private el: ElementRef) { 
  
  }

  
  @HostListener("mouseover")
  setInputFocus() {
    
    this.el.nativeElement.style.boxShadow="0px 0px 8px #888888"
  }
  @HostListener("mouseleave")
  setInputOut() {
    
    this.el.nativeElement.style.boxShadow="none"
  }
  
}
