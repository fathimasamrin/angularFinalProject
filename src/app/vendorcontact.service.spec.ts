import { TestBed } from '@angular/core/testing';

import { VendorcontactService } from './vendorcontact.service';

describe('VendorcontactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorcontactService = TestBed.get(VendorcontactService);
    expect(service).toBeTruthy();
  });
});
