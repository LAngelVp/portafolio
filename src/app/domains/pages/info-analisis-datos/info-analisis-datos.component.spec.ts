import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAnalisisDatosComponent } from './info-analisis-datos.component';

describe('InfoAnalisisDatosComponent', () => {
  let component: InfoAnalisisDatosComponent;
  let fixture: ComponentFixture<InfoAnalisisDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAnalisisDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAnalisisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
