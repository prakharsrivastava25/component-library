import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-av-sidebar',
  templateUrl: './av-sidebar.component.html',
  styleUrls: ['./av-sidebar.component.css']
})
export class AvSidebarComponent  {

  // name: string;
  // key: string = "categories";
  // data: Array<Object> = [
  //   {
  //     name: "Beverages",
  //     categories: [
  //       {
  //         name: "Pepsi",
  //         categories: []
  //       },
  //       {
  //         name: "CocaCola",
  //         categories: [
  //           {
  //             name: "CokeDiet",
  //             categories: [
  //               {
  //                 name: "CokeDietChild1",
  //                 categories: [
  //                   {
  //                     name: "CokeDietChild1.1",
  //                     categories: [
  //                       {
  //                         name: "CokeDietChild1.1.1",
  //                         categories: []
  //                       },
  //                       {
  //                         name: "CokeDietChild1.1.2",
  //                         categories: []
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               },
  //               {
  //                 name: "CokeDietChild2",
  //                 categories: []
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Footwear",
  //     categories: [
  //       {
  //         name: "Sneakers",
  //         categories: [
  //           {
  //             name: "Sneakers1",
  //             categories: [
  //               {
  //                 name: "Sneakers1.1",
  //                 categories: [
  //                   {
  //                     name: "Sneakers1.1.1",
  //                     categories: []
  //                   }
  //                 ]
  //               },
  //               {
  //                 name: "Sneakers1.2",
  //                 categories: []
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "NOSubmenu",
  //     categories: []
  //   },
  //   {
  //     name: "Prakhar",
  //     categories: []
  //   }
  // ];
     @Input('inputData') public data: Array<Object>;
     @Input('inputKey') public key: string;
     @Output() public navbarEvent = new EventEmitter();
     name:string;

  fireEvent3(evento){
      console.log("AT PARENT (av-sidebar) EVENT RECEIVED IS:"+evento);
//      this.navbarEvent.emit(evento);
  }
  constructor(){console.log("inside dv-web component constructor");}

}
