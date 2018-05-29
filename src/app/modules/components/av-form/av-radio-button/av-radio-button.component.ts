import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-av-radio-button',
  templateUrl: './av-radio-button.component.html',
  styleUrls: ['./av-radio-button.component.css']
})
export class AvRadioButtonComponent implements OnInit {
  @Input() radioBtnProp: {
    groupLabel: string,
    groupData: [{ 'labelName': string }]}
  constructor() { }

  ngOnInit() {
  }

}
