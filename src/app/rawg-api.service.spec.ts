import { TestBed } from '@angular/core/testing';

import { RawgApiService } from './rawg-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RawgApiService', () => {
  let service: RawgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(RawgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
