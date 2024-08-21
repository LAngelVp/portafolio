import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDesarrolloSoftwareComponent } from './info-desarrollo-software.component';

describe('InfoDesarrolloSoftwareComponent', () => {
  let component: InfoDesarrolloSoftwareComponent;
  let fixture: ComponentFixture<InfoDesarrolloSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDesarrolloSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDesarrolloSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
