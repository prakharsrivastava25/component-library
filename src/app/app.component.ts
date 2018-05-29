import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './services/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuControlValue: boolean = true;
  labelProperty = [{ labelFor: "Email", label: "Email Address" }]

  inputLabelProperty = [{
    labelFor: "inputEmail", label: "Email", inputType: "text",
    placeHolder: "please enter Email address: name@abc.com"
  }]
  textAreaProperty = [{
    textAreaLabelFor: "comment",
    textAreaLabel: "Comments:",
    textAreaRows: "4"
  }]

  checkboxProp = [{
    groupLabel: "Sample checkbo group",
    groupData: [
      { 'labelName': "checkbox 1" }, { 'labelName': "checkbox 2" },
      { 'labelName': "checkbox 3" }
    ]
  },
  {
    groupLabel: "Sample checkbox group 2",
    groupData: [
      { 'labelName': "checkbox 1" }, { 'labelName': "checkbox 2" },
      { 'labelName': "checkbox 3" }
    ]
  }]

  radioBtnProp = [{
    groupLabel: "Sample radio button group",
    groupData: [
      { 'labelName': "rb 1" }, { 'labelName': "rb 2" },
      { 'labelName': "rb 3" }
    ]
  }]

  cardPropertiesOne = {
    "cardTitle": "Card 1",
    "cardText": "Exampe of a card.",
    "buttonText": "C1-button"
  }
  cardPropertiesTwo = {
    "cardTitle": "Card 2",
    "cardText": "Exampe of a card 2.",
    "buttonText": "C2-button"
  }
//FOR SUBSCRIBING TO EVENT
  // private subscription: Subscription;

  //   constructor(private messageService: MessageService){
  //     this.subscription = this.messageService.subscribe('sidenav', (payload) => {
  //       console.log("inside constructor of app.component.ts OF DV WEBCOMPONENTO so payload received here is");
  //       console.log(payload);
  //     });
  // }
//For SUBSCRIBING TO EVENTS ENDS

  // timer(counter){
  //   let fastrack = setInterval(()=>{console.log("Hello from setIntervalafter 2 sec");counter++;
  //   if (counter==10) {
  //     clearInterval(fastrack);
  //  }},1000);
  //   console.log("---->"+counter);

  // }
  name: string;
  key: string = "categories";
  data: Array<Object> = [
    {
      name: "Beverages",
      categories: [
        {
          name: "Pepsi",
          categories: []
        },
        {
          name: "CocaCola",
          categories: [
            {
              name: "CokeDiet",
              categories: [
                {
                  name: "CokeDietChild1",
                  categories: [
                    {
                      name: "CokeDietChild1.1",
                      categories: [
                        {
                          name: "CokeDietChild1.1.1",
                          categories: []
                        },
                        {
                          name: "CokeDietChild1.1.2",
                          categories: []
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "CokeDietChild2",
                  categories: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Footwear",
      categories: [
        {
          name: "Sneakers",
          categories: [
            {
              name: "Sneakers1",
              categories: [
                {
                  name: "Sneakers1.1",
                  categories: [
                    {
                      name: "Sneakers1.1.1",
                      categories: []
                    }
                  ]
                },
                {
                  name: "Sneakers1.2",
                  categories: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "NOSubmenu",
      categories: []
    },
    {
      name: "Prakhar",
      categories: []
    }
  ];

  cardInstanceOne;
  cardInstanceTwo;

  // card property recieved
  cardPropRecieved(event) {
    console.log('card properties:', event);
    if (event.cardProperty.cardTitle === 'Card 1') {
      this.cardInstanceOne = event;
    } else if (event.cardProperty.cardTitle === 'Card 2') {
      this.cardInstanceTwo = event;
    }
  }

  cardValueChange(event) {
    console.log('cardValueChange: ', event);
    if (event === 'Card 1') {
      this.cardInstanceTwo.callChangeButtonText('changed!!');
    }
  }
}
