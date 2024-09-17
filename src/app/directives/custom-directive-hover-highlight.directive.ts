import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class CustomDirectiveHoverHighlightDirective {
  
  @Input() defaultColor: string = '';  // Accept input for default color
  @Input('appHoverHighlight') highlightColor: string = '';  // Accept input for highlight color

  constructor(private el: ElementRef) {
    console.log(el.nativeElement.id);
    if(el.nativeElement.id === 'test-id'){
        el.nativeElement.style.backgroundColor = 'yellow';
    }    
  }

  // Method to change background color
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  // Listen to mouseenter event to apply highlight color
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'yellow');
  }

  // Listen to mouseleave event to remove highlight color
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

}
