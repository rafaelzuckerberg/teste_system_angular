import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';

@Directive({
  selector: '[maskfixe]'
})
export class MaskFixeDirective {

  constructor(private elemRef: ElementRef) { 
    this.mask();
  }

  mask() {
    const nativeEl = this.elemRef.nativeElement;
    $(nativeEl).mask('(00) 0000-0000'); 
  }

}
