import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectThemeDarkMode } from 'src/app/store/app-settings-store/store/selectors/app-settings.selectors';
import { setChartViewFutureWeatherAction } from 'src/app/store/search-weather-store/store/actions/search-weather.actions';
import { selectChartViewNextWeather } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';


@Component({
  selector: 'app-home-page-main',
  templateUrl: './home-page-main.component.html',
  styleUrls: ['./home-page-main.component.scss'],
})
export class HomePageMainComponent implements OnInit {
  public chartViewNextWeather$: Observable<boolean> = this._store.pipe(select(selectChartViewNextWeather));
  public darkModeTheme$: Observable<boolean> = this._store.pipe(select(selectThemeDarkMode));

  constructor(private _store: Store) { }

  ngOnInit(): void { }

  public changeViewNextWeather(value: boolean) {
    this._store.dispatch(setChartViewFutureWeatherAction({ value }));
  }
}
