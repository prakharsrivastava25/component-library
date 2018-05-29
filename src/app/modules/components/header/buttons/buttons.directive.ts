import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[appDvButton]',
})
export class ButtonsDirective {

    constructor(elemRef: ElementRef, renderer: Renderer2) {
        console.log('testing in directive');
        renderer.addClass(elemRef.nativeElement, 'dv-btn');
        // renderer.addClass(elemRef.nativeElement, buttonService.buttonType);
        // renderer.addClass(elemRef.nativeElement, buttonService.buttonSize);
        // renderer.addClass(elemRef.nativeElement, buttonService.buttonColor);
    }
}
