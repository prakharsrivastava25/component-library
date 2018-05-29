import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-av-textarea',
  templateUrl: './av-textarea.component.html',
  styleUrls: ['./av-textarea.component.css']
})
export class AvTextareaComponent implements OnInit {
  @Input() textAreaProperty: [{
    textAreaLabelFor: string,
    textAreaLabel: string,
    textAreaRows: string
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
