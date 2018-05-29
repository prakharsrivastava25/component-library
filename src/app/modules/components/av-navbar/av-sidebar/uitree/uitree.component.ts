import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MessageService } from '../../../../../services/message.service';
@Component({
  selector: 'app-uitree',
  templateUrl: './uitree.component.html',
  styleUrls: ['./uitree.component.css']
})
export class UitreeComponent implements OnInit {


  @Input('data') public items: Array<Object>;
  @Input('key') public key: string;
  @Output() public uitreeEvent = new EventEmitter();
  // submenu= this.key;

  // public isCollapsed=false;
  public count:number;
  ngOnInit(){//this.isCollapsed = true;
  }
  constructor(private messageService: MessageService){this.count=0;}
  // Collapse(value){
  //   this.isCollapsed=!value;
  //   console.log("Value received in Collapse function:",value);
  //   console.log("Value going out of Collapse function",this.isCollapsed);
  //   console.log("Count value is:"+this.count++);
  // }
  fireEvent2(happening)
  {
    console.log("Event at fireEvent2 of uitree:"+happening);
    this.messageService.broadcast('sidenav', happening);
//    this.uitreeEvent.emit(happening);
  }
}
