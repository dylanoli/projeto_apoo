import { TestBed } from '@angular/core/testing';

import { PassDataLicencaService } from './pass-data-licenca.service';

describe('PassDataLicencaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassDataLicencaService = TestBed.get(PassDataLicencaService);
    expect(service).toBeTruthy();
  });
});
