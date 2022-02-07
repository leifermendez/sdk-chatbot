import { ChatRestService } from './../service/chat-rest.service';
import { ChatHandleService } from './../service/chat-handle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(private chatRest: ChatRestService, private chatService: ChatHandleService) { }

  ngOnInit(): void {
    this.chatRest.sendCheck()
    .subscribe((res) => {
      //TODO respondemos con mensaje de bienvenida
      this.chatService.sendMessage(res) 
    })
  }

}
