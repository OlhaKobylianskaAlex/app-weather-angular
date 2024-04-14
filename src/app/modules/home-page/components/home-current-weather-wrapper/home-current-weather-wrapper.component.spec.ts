import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrentWeatherWrapperComponent } from './home-current-weather-wrapper.component';

describe('HomeCurrentWeatherWrapperComponent', () => {
  let component: HomeCurrentWeatherWrapperComponent;
  let fixture: ComponentFixture<HomeCurrentWeatherWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCurrentWeatherWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCurrentWeatherWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
