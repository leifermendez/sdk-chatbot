import { TestBed } from '@angular/core/testing';

import { ChatHandleService } from './chat-handle.service';

describe('ChatHandleService', () => {
  let service: ChatHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
