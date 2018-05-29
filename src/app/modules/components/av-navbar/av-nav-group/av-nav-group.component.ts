import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-av-nav-group',
  templateUrl: './av-nav-group.component.html',
  styleUrls: ['./av-nav-group.component.css']
})
export class AvNavGroupComponent implements OnInit {
  @Output() isToggled = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
