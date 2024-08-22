import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLlamadaAcionComponent } from './btn-llamada-acion.component';

describe('BtnLlamadaAcionComponent', () => {
  let component: BtnLlamadaAcionComponent;
  let fixture: ComponentFixture<BtnLlamadaAcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLlamadaAcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnLlamadaAcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
