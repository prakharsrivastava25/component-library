import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-av-label',
  templateUrl: './av-label.component.html',
  styleUrls: ['./av-label.component.css']
})
export class AvLabelComponent implements OnInit {
  @Input() labelProperty: {
    labelFor: string, label: string};

  constructor() { }

  ngOnInit() {
  }

}
