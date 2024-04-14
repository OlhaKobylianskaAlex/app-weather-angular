import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFutureWeatherChartComponent } from './home-future-weather-chart.component';

describe('HomeFutureWeatherChartComponent', () => {
  let component: HomeFutureWeatherChartComponent;
  let fixture: ComponentFixture<HomeFutureWeatherChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFutureWeatherChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFutureWeatherChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
