import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvCardComponent } from './av-card/av-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvCardComponent],
  exports: [
    AvCardComponent
  ]
})
export class ContainerModule { }
