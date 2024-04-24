import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPersonalComponent } from './header-personal.component';

describe('HeaderPersonalComponent', () => {
  let component: HeaderPersonalComponent;
  let fixture: ComponentFixture<HeaderPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
