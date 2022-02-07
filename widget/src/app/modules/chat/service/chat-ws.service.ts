import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatWSService {



  constructor() {
    // this.getMessage().subscribe((res:any) => this.sendMessage(res.text, res.type))
   }



  emitEvent(eventName:string, eventPayload:any):void{
    // this.socket.emit(eventName, eventPayload);
  }

  getMessage() {
    // return this.socket.fromEvent('message')
  }
}
