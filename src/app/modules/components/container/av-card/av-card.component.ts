import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-av-card',
  templateUrl: './av-card.component.html',
  styleUrls: ['./av-card.component.css']
})
export class AvCardComponent implements
  OnInit,
  OnChanges  {

  @Input() cardProperties: {
    'cardTitle': string,
    'cardText': string,
    'buttonText': string
  };

  changeButtonText = ((param) => {
    this.cardProperties.buttonText = param;
  });

  // cardApi = {
  //   'cardProperty': this.cardProperties,
  //   'callChangeButtonText': this.changeButtonText
  // };
  @Output() cardInitiated = new EventEmitter();
  @Output() cardButtonClicked = new EventEmitter();


  constructor() { }

  ngOnInit() {
    // console.log('button cardProperties: ', this.cardProperties);
    let cardApi = {
      'cardProperty': this.cardProperties,
      'callChangeButtonText': this.changeButtonText
    };
    console.log('button cardProperties: ', cardApi);

    this.cardInitiated.emit(cardApi);
  }

  ngOnChanges() {
    // this.cardInitiated.emit(this.cardApi);
  }

  cardBtnClicked(event) {
    console.log('cardButton value is:', event);
    this.cardButtonClicked.emit(event);
  }
}
