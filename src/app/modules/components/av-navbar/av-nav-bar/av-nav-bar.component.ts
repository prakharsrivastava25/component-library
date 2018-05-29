import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-av-nav-bar',
  templateUrl: './av-nav-bar.component.html',
  styleUrls: ['./av-nav-bar.component.css']
})
export class AvNavBarComponent implements OnInit {

//  name: string;
//   someKey: string = "categories";
//   someData: Array<Object> = [
//     {
//       name: "Beverages",
//       categories: [
//         {
//           name: "Pepsi",
//           categories: []
//         },
//         {
//           name: "CocaCola",
//           categories: [
//             {
//               name: "CokeDiet",
//               categories: [
//                 {
//                   name: "CokeDietChild1",
//                   categories: [
//                     {
//                       name: "CokeDietChild1.1",
//                       categories: [
//                         {
//                           name: "CokeDietChild1.1.1",
//                           categories: []
//                         },
//                         {
//                           name: "CokeDietChild1.1.2",
//                           categories: []
//                         }
//                       ]
//                     }
//                   ]
//                 },
//                 {
//                   name: "CokeDietChild2",
//                   categories: []
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "Footwear",
//       categories: [
//         {
//           name: "Sneakers",
//           categories: [
//             {
//               name: "Sneakers1",
//               categories: [
//                 {
//                   name: "Sneakers1.1",
//                   categories: [
//                     {
//                       name: "Sneakers1.1.1",
//                       categories: []
//                     }
//                   ]
//                 },
//                 {
//                   name: "Sneakers1.2",
//                   categories: []
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "NOSubmenu",
//       categories: []
//     },
//     {
//       name: "Prakhar",
//       categories: []
//     }
//   ];
@Input('inputData') public someData: Array<Object>;
@Input('inputKey') public someKey: string;
@Output() public dvWebComponentEvent = new EventEmitter();
name:string;

fireEvent5(evento){
 console.log("AT av-nav-bar EVENT RECEIVED for dvwebcomponent is IS:"+evento);
 this.dvWebComponentEvent.emit(evento);
}
public isCollapsed=true;
Collapse(value){
  this.isCollapsed=!value;
  console.log("Value received in Collapse function of av-nav-bar:",value);
  console.log("Value going out of Collapse function of av-nav-bar:",this.isCollapsed);
}
  // property for rendering navbar and sidebar
  menuBar = true;
  constructor() { }

  ngOnInit() {
  }
  toggle($event) {
    console.log('qwerty: ', $event);
  }
}
