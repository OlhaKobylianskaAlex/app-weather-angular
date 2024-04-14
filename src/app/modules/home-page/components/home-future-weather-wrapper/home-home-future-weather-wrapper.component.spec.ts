import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFutureWeatherWrapperComponent } from './home-home-future-weather-wrapper.component';

describe('HomeFutureWeatherWrapperComponent', () => {
  let component: HomeFutureWeatherWrapperComponent;
  let fixture: ComponentFixture<HomeFutureWeatherWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFutureWeatherWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFutureWeatherWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
