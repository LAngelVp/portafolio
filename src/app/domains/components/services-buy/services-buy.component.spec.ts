import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBuyComponent } from './services-buy.component';

describe('ServicesBuyComponent', () => {
  let component: ServicesBuyComponent;
  let fixture: ComponentFixture<ServicesBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
