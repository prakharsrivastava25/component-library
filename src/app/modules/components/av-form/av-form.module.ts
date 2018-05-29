import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvFormStructureComponent } from './av-form-structure/av-form-structure.component';
import { AvInputComponent } from './av-input/av-input.component';
import { AvTextareaComponent } from './av-textarea/av-textarea.component';
import { AvCheckboxesComponent } from './av-checkboxes/av-checkboxes.component';
import { AvRadioButtonComponent } from './av-radio-button/av-radio-button.component';
import { AvLabelComponent } from './av-label/av-label.component';
import { AvDynamicFormComponent } from './av-dynamic-form/av-dynamic-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AvFormStructureComponent,
    AvInputComponent,
    AvTextareaComponent,
    AvCheckboxesComponent,
    AvRadioButtonComponent,
    AvLabelComponent,
    AvDynamicFormComponent
  ],
  entryComponents: [ AvCheckboxesComponent,
    AvInputComponent,
    AvRadioButtonComponent
  ],
  exports: [AvFormStructureComponent,
    AvInputComponent,
    AvTextareaComponent,
    AvCheckboxesComponent,
    AvRadioButtonComponent,
    AvLabelComponent,
    AvDynamicFormComponent
  ]
})
export class avFormModule { }
