import { ClientSDKInterceptor } from './core/interceptors/client-sdk.interceptor';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieModule } from 'ngx-cookie';

const config: SocketIoConfig = { url: environment.socket, options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SocketIoModule.forRoot(config),
    CookieModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      useClass: ClientSDKInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
