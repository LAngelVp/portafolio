import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGenerateComponent } from './data-generate.component';

describe('DataGenerateComponent', () => {
  let component: DataGenerateComponent;
  let fixture: ComponentFixture<DataGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGenerateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
