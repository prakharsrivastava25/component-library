import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-av-input',
  templateUrl: './av-input.component.html',
  styleUrls: ['./av-input.component.css']
})
export class AvInputComponent implements OnInit {
  @Input() inputProperty: {
    labelFor: string, label: string, inputType: string,
    placeHolder: string
  };
  constructor() { }

  ngOnInit() {
  }

}
