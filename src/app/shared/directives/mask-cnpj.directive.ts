import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';

@Directive({
  selector: '[maskcnpj]'
})
export class MaskCnpjDirective {

  constructor(private elemRef: ElementRef) { 
    this.mask();
  }

  mask() {
    const nativeEl = this.elemRef.nativeElement;
    $(nativeEl).mask('00.000.000/0000-00', {reverse: true}); 
  }

}
