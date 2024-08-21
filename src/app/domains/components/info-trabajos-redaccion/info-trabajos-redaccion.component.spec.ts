import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrabajosRedaccionComponent } from './info-trabajos-redaccion.component';

describe('InfoTrabajosRedaccionComponent', () => {
  let component: InfoTrabajosRedaccionComponent;
  let fixture: ComponentFixture<InfoTrabajosRedaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTrabajosRedaccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoTrabajosRedaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
