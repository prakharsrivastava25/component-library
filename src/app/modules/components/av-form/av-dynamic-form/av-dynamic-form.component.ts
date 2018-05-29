import { element } from 'protractor';
// import {Type} from '@angular/compiler';
import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  ChangeDetectorRef,
  TemplateRef
} from '@angular/core';
import { AvCheckboxesComponent } from '../av-checkboxes/av-checkboxes.component';
import { AvRadioButtonComponent } from '../av-radio-button/av-radio-button.component';
import { AvInputComponent } from '../av-input/av-input.component';
import { Type } from '@angular/compiler/src/output/output_ast';
import { T } from '@angular/core/src/render3';

@Component({
  selector: 'app-av-dynamic-form',
  templateUrl: './av-dynamic-form.component.html',
  styleUrls: ['./av-dynamic-form.component.css']
})
export class AvDynamicFormComponent implements OnInit {

  @ViewChild('formContainer', { read: ViewContainerRef }) container: any;
  componentRef: any;
  // public text = '123';
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  // injection of compinent on click
  injectComponent(eventData) {
    this.container.clear();
    console.log('eventData:', eventData, 'eventData: ', typeof(eventData));
    const injectableComponents = JSON.parse(eventData.toString());
    console.log('injectableComponents', injectableComponents, 'injectableComponents-type', typeof(injectableComponents));
    const factories = Array.from(this.resolver['_factories'].keys());
    // console.log('factories:', factories);
    // console.log('AvCheckboxesComponent:', AvCheckboxesComponent);
    injectableComponents.forEach(element => {
      const factoryClass: any = factories.find((x: any) => x.name === element.componentType);
      // console.log('factoryClass-type:', typeof (factoryClass));
      const factory = this.resolver.resolveComponentFactory(factoryClass);
      this.componentRef = this.container.createComponent(factory);
      console.log('this.componentRef.instance:', this.componentRef.instance);
      // this.componentRef.instance.checkboxProp = element.checkboxProp;
      this.componentRef.instance[element.checkboxPropertyName] = element[element.checkboxPropertyName];
      // this.componentRef.instance.find((a: any) => x.name === element.componentType) = element.checkboxProp;
    });
  }
}


// [
//   {
//       "componentType": "AvCheckboxesComponent",
//       "checkboxPropertyName": "checkboxProp",
//       "checkboxProp": {
//           "groupLabel": "Sample checkbo group",
//           "groupData": [
//               { "labelName": "checkbox 1" }, { "labelName": "checkbox 2" },
//               { "labelName": "checkbox 3" }
//           ]
//       }
//   },
//   {
//       "componentType": "AvRadioButtonComponent",
//       "checkboxPropertyName": "radioBtnProp",
//       "radioBtnProp": {
//           "groupLabel": "Sample radio button group",
//           "groupData": [
//               { "labelName": "rb 1" }, { "labelName": "rb 2" },
//               { "labelName": "rb 3" }
//           ]
//       }
//   },
//   {
//       "componentType": "AvInputComponent",
//       "checkboxPropertyName": "inputProperty",
//       "inputProperty": {
//           "labelFor": "inputEmail", "label": "Email", "inputType": "text",
//           "placeHolder": "please enter Email address: name@abc.com"
//       }
//   }
// ]
