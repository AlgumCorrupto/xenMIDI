import { TestBed } from '@angular/core/testing';

import { tilemapService } from './tilemap.service';

describe('HeroServiceService', () => {
  let service: tilemapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tilemapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
