import { ChatHandleService } from './../../service/chat-handle.service';
import { MessageInterface } from '../../../../core/models/messate.interface';
import { ChatRestService } from './../../service/chat-rest.service';
import { ChatWSService } from './../../service/chat-ws.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeLast, tap } from 'rxjs';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
})
export class InputBoxComponent implements OnInit {
  public formInput: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  constructor(private chatRest: ChatRestService, private chatService:ChatHandleService) {}

  get rowAuto(): number {
    const countCharacteres: number = this.formInput.value.text?.length || 0;
    const numberRow = Math.round(countCharacteres / 30);
    return numberRow < 1 ? 1 : numberRow;
  }

  ngOnInit(): void {}

  send(): void {

    const { text } = this.formInput.value;
    const body: MessageInterface = { type: 'in', text };

    this.chatService.sendMessage(body);

    this.chatRest.sendMessage(body)
    .subscribe((res) => {
      this.chatService.sendMessage(res)
    })
    this.formInput.reset();
  }
}
