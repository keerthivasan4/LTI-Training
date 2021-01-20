import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayFirstComponent } from './two-way-first.component';

describe('TwoWayFirstComponent', () => {
  let component: TwoWayFirstComponent;
  let fixture: ComponentFixture<TwoWayFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
