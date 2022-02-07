import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageInterface } from 'src/app/core/models/messate.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatHandleService {
  private _messages$ = new BehaviorSubject<any>([
    {
      type:'in',
      text:'hola!'
    }
  ]);
  public messages$ = this._messages$.asObservable();

  constructor() { }

  sendMessage({text, type}: MessageInterface):void{
    const currentData = this._messages$.value;
    const updateData = [...currentData,...[
      {
        text, type
      }
    ]]
    this._messages$.next(updateData)
  }


}
