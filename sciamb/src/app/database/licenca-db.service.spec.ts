import { TestBed } from '@angular/core/testing';

import { LicencaDBService } from './licenca-db.service';

describe('Licenca.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicencaDBService = TestBed.get(LicencaDBService);
    expect(service).toBeTruthy();
  });
});
