import { TestBed } from '@angular/core/testing';

import { AssetInfoStatusServiceTs } from './asset-info-status.service.ts';

describe('AssetInfoStatusServiceTs', () => {
  let service: AssetInfoStatusServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetInfoStatusServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
