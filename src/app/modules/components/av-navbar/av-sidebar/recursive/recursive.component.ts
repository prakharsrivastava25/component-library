import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.css']
})
export class RecursiveComponent  {


  @Input('result') public result;
  @Input('categories') public key: string;
  @Output() public recursiveEvent = new EventEmitter();
  check(name,item_categories_length){
    console.log("NAME------>"+name);
    console.log(this.result);
    console.log(item_categories_length);
  }

  public isCollapsed = true;

  fireEvent(selectedOption){
    console.log("Inside fireEvent function")
    this.recursiveEvent.emit(selectedOption);
  }
}
