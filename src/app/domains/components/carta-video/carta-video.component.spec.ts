import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaVideoComponent } from './carta-video.component';

describe('CartaVideoComponent', () => {
  let component: CartaVideoComponent;
  let fixture: ComponentFixture<CartaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
