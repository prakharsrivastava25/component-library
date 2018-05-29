import { Component, OnInit, Input, Output, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button appDvButton [ngClass]="[btnType, btnSize]"><ng-content></ng-content></button>`
})
export class ButtonsComponent implements OnInit {
//   @Input() btnConf: {type: string, name: string, size: string};
  @Input() btnType: string;
  @Input() btnSize: string;

  constructor(private renderer: Renderer2, elemRef: ElementRef) {
  }

  ngOnInit() {}

}
