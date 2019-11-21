import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputDirect]'
})
export class InputDirectDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = "#eeeeee";
  }

  
  @HostListener("focus")
  setInputFocus() {
    
    this.highlight(null);
  }
  @HostListener("focusout")
  setInputFocusOut() {
    
    this.highlight("#eeeeee");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
