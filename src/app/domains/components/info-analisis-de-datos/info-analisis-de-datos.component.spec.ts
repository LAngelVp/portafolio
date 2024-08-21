import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAnalisisDeDatosComponent } from './info-analisis-de-datos.component';

describe('InfoAnalisisDeDatosComponent', () => {
  let component: InfoAnalisisDeDatosComponent;
  let fixture: ComponentFixture<InfoAnalisisDeDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAnalisisDeDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAnalisisDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
