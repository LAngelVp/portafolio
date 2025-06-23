import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosExcelComponent } from './cursos-excel.component';

describe('CursosExcelComponent', () => {
  let component: CursosExcelComponent;
  let fixture: ComponentFixture<CursosExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosExcelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
