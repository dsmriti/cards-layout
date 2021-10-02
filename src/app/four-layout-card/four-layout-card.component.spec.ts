import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourLayoutCardComponent } from './four-layout-card.component';

describe('FourLayoutCardComponent', () => {
  let component: FourLayoutCardComponent;
  let fixture: ComponentFixture<FourLayoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourLayoutCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourLayoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
