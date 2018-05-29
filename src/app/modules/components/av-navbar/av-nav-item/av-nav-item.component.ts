import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-av-nav-item',
  templateUrl: './av-nav-item.component.html',
  styleUrls: ['./av-nav-item.component.css'],
})
export class AvNavItemComponent implements OnInit {
  @Output() isToggled = new EventEmitter();
  toggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleSidebar() {
    this.toggle = !this.toggle;
    this.isToggled.emit(this.toggle);
  }
}
