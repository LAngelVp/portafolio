import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveSpikesComponent } from './wave-spikes.component';

describe('WaveSpikesComponent', () => {
  let component: WaveSpikesComponent;
  let fixture: ComponentFixture<WaveSpikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveSpikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaveSpikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
