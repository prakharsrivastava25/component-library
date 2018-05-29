import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { DvButtonComponent } from './dv-button/dv-button.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonsDirective } from './buttons/buttons.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, DvButtonComponent, ButtonsComponent, ButtonsDirective],
  exports: [
    HeaderComponent,
    DvButtonComponent,
    ButtonsDirective,
    ButtonsComponent
  ]
})
export class HeaderModule { }
