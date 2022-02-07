import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showChat:boolean | string | number = 0;

  constructor(private cookieService:CookieService) {
    //TODO escucha los eventos del SDK pasando a IFRAME 🚩🚩  
    window.addEventListener('message', (dataIn) => {
      try {
        const data = JSON.parse(dataIn.data) || { item: null, value: null };
        const item = data.setItem;
        const value = data.value;

        console.log({item, value})
        if (item === 'connect_tenant' && value !== null) {
          console.log('----------------',value);
          this.cookieService.put('chat_saas_id',value,{
            sameSite:'none',
            secure:true
          })
          this.showChat = value
        }
      } catch (e) {}
    });
  }
}
