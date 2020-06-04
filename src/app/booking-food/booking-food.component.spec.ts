import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFoodComponent } from './booking-food.component';

describe('BookingFoodComponent', () => {
  let component: BookingFoodComponent;
  let fixture: ComponentFixture<BookingFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
