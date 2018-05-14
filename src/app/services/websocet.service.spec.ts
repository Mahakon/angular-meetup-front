import { TestBed, inject } from '@angular/core/testing';

import { WebsocetService } from './websocet.service';

describe('WebsocetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocetService]
    });
  });

  it('should be created', inject([WebsocetService], (service: WebsocetService) => {
    expect(service).toBeTruthy();
  }));
});
