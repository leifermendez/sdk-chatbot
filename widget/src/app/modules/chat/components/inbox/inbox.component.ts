
import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { tap } from 'rxjs';
import { ChatHandleService } from '../../service/chat-handle.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;
  
  public messages$ = this.chatService.messages$
  .pipe(tap((rows) => {
    console.log('row',rows);
    
    this.scroll()
  }))

  constructor(private chatService: ChatHandleService) { }


  ngOnInit(): void {

  }

  private scroll():void{
    if(this.componentRef){
      console.log('scroll?');
      
      setTimeout(() => {
        //@ts-ignore
        this.componentRef.directiveRef.scrollToBottom(0, 150);
      },50)

    }
  }
}
