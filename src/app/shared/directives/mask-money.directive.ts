import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';

@Directive({
  selector: '[maskmoney]'
})
export class MaskMoneyDirective {

  constructor(private elemRef: ElementRef) { 
    this.mask();
  }

  mask() {
    const nativeEl = this.elemRef.nativeElement;
    $(nativeEl).mask('#.##0,00', {reverse: true}); 
  }

}
