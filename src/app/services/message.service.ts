import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface Message {
  type: string;
  payload: any;
}
//type MessageCallback = (payload: any) => void;

@Injectable()
export class MessageService {

  constructor() { }
  private handler = new Subject<Message>();

  broadcast(type: string, payload: any) {
    console.log("from broadcast function of service telling for whom is the message");
    console.log(type);
    console.log("from broadcast function of service payload is");
    console.log(payload);
    this.handler.next({ type, payload });
  }

  subscribe(type: string, record): Subscription {
    // console.log("From service this.handler value:"+this.handler);
    // console.log(this.handler);
    // console.log("from service subscribe function value of callback  of type message callback is:--->");
    // console.log(callback);
    return this.handler
      .filter(message => message.type === type)
      .map(message => message.payload)
      .subscribe(record);
  }

}
