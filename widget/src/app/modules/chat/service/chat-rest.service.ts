import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MessageInterface } from 'src/app/core/models/messate.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatRestService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  sendMessage(body: MessageInterface): Observable<MessageInterface> {
    return this.http.post<MessageInterface>(`${this.URL}/send`, body)
    .pipe(
      map((response:any) => {
        return {
          text:response.replyMessage,
          type:'out'
        }
      })
    )
  }

  sendCheck(): Observable<MessageInterface> {
    return this.http.get<MessageInterface>(`${this.URL}/check-customer`)
    .pipe(
      map((response:any) => {
        return {
          text:response.replyMessage,
          type:'out'
        }
      })
    )
  }
}
