import { TestBed } from '@angular/core/testing';

import { CursosExcelServiceService } from './cursos-excel-service.service';

describe('CursosExcelServiceService', () => {
  let service: CursosExcelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosExcelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
