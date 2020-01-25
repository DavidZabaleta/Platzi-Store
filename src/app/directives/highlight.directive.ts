import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() backgroundColor: string;
  @Input() color: string;
  
  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.backgroundColor);
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
    this.el.nativeElement.style.color = this.color;
  }
}
