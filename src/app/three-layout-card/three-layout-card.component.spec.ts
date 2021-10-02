import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLayoutCardComponent } from './three-layout-card.component';

describe('ThreeLayoutCardComponent', () => {
  let component: ThreeLayoutCardComponent;
  let fixture: ComponentFixture<ThreeLayoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeLayoutCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLayoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
