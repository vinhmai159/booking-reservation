import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderFoodComponent } from './oder-food.component';

describe('OderFoodComponent', () => {
  let component: OderFoodComponent;
  let fixture: ComponentFixture<OderFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
