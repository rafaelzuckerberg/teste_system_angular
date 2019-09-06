import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';

@Directive({
  selector: '[maskcell]'
})
export class MaskCellDirective {

  constructor(private elemRef: ElementRef) { 
    this.mask();
  }


  mask() {
    const nativeEl = this.elemRef.nativeElement; 
    $(nativeEl).mask('(00) 00000-0000');
  }

}
