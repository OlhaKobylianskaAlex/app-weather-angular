import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrentWeatherComponent } from './home-current-weather.component';

describe('HomeCurrentWeatherComponent', () => {
  let component: HomeCurrentWeatherComponent;
  let fixture: ComponentFixture<HomeCurrentWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCurrentWeatherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
