import { TestBed } from '@angular/core/testing';

import { JitService } from './jit.service';

describe('JitService', () => {
  let service: JitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
