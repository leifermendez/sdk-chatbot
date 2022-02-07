import { TestBed } from '@angular/core/testing';

import { ChatWSService } from './chat-ws.service';

describe('ChatWSService', () => {
  let service: ChatWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
