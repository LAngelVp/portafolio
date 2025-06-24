import { TestBed } from '@angular/core/testing';

import { RegistroServicesService } from './registro-services.service';

describe('RegistroServicesService', () => {
  let service: RegistroServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
