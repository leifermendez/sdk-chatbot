import { TestBed } from '@angular/core/testing';

import { ChatRestService } from './chat-rest.service';

describe('ChatRestService', () => {
  let service: ChatRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
