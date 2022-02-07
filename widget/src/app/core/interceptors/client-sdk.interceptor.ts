import { CookieService } from 'ngx-cookie';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClientSDKInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    const customer = this.cookieService.get('chat_saas_id') || ''
    const res = request.clone({
      setHeaders:{
        customer:customer
      }
    })
    return next.handle(res);
  }
}
