import { TestBed } from '@angular/core/testing';

import { ClientSDKInterceptor } from './client-sdk.interceptor';

describe('ClientSDKInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ClientSDKInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ClientSDKInterceptor = TestBed.inject(ClientSDKInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
