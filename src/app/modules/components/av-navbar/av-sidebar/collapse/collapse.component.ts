import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../../../../services/message.service';
@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  @Input('arrdata') public results;
  @Input('heading') public heading;
  @Input('category') public key: string;
  @Output() public collapseEvent = new EventEmitter();
  public isCollapsed;
  constructor(private messageService: MessageService) { 
    console.log("Inside collapse.component.ts");
    
}

  ngOnInit() {
    console.log("collapse component received value is on next line ");
    console.log(this.results);
    console.log(this.heading);
    this.isCollapsed=true;
  }
  Collapse(value){
    this.isCollapsed=!value;
    console.log("Collapse Compoent Value received in Collapse function:",value);
    console.log("Collapse Component Value going out of Collapse function",this.isCollapsed);
  }
  fireEventy(choosenOption)
  {
    console.log("fireEventy argument received from click"+choosenOption);
    this.messageService.broadcast('sidenav', choosenOption);
//    this.collapseEvent.emit(choosenOption);
  }
}
