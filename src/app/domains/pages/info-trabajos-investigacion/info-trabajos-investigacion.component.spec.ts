import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrabajosInvestigacionComponent } from './info-trabajos-investigacion.component';

describe('InfoTrabajosInvestigacionComponent', () => {
  let component: InfoTrabajosInvestigacionComponent;
  let fixture: ComponentFixture<InfoTrabajosInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTrabajosInvestigacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoTrabajosInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
