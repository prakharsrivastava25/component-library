import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-av-checkboxes',
  templateUrl: './av-checkboxes.component.html',
  styleUrls: ['./av-checkboxes.component.css']
})
export class AvCheckboxesComponent implements OnInit {
  @Input() checkboxProp : {
    groupLabel: string,
    groupData: [{ 'labelName': string }]
  }

  constructor() {
    console.log("checkbox called");
  }

  ngOnInit() {
  }

}
