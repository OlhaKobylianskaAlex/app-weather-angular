import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFutureWeatherListComponent } from './home-future-weather-list.component';

describe('HomeFutureWeatherListComponent', () => {
  let component: HomeFutureWeatherListComponent;
  let fixture: ComponentFixture<HomeFutureWeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFutureWeatherListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFutureWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
