import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myBold]'
/*
'(mouseenter)': 'onMouseEnter()',
'(mouseleave)': 'onMouseLeave()'
*/

})
export class BoldDirective {
  @Input() selectSize = '38px';
  @Input() defaultSize = '16px';

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.textAlign = 'center';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'font-style', 'italic');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontProps('red');
    this.setSizeProps(this.selectSize);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontProps('inherit');
    this.setSizeProps(this.defaultSize);
  };

  private setFontProps(val: string) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', val);
  }

  private setSizeProps(val: string) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', val);
  }
}
