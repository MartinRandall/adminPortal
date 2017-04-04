import {Directive, ElementRef} from "@angular/core";

/**
 * Apply the iCheck style to checkboxes and radio buttons
 */
@Directive({
  selector: '[iCheck]'
})
export class ICheckDirective {
  constructor(el: ElementRef) {
    $(el.nativeElement).iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass: 'iradio_flat-green'
    });
  }
}
