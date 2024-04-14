import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setDarkThemeAction, setImperialMeasureAction } from 'src/app/store/app-settings-store/store/actions/app-settings.actions';
import { selectImperialMeasure, selectThemeDarkMode } from 'src/app/store/app-settings-store/store/selectors/app-settings.selectors';
import { setChartViewFutureWeatherAction } from 'src/app/store/search-weather-store/store/actions/search-weather.actions';
import { selectChartViewNextWeather } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public darkModeTheme$: Observable<boolean> = this._store.pipe(select(selectThemeDarkMode));
  public chartViewNextWeather$: Observable<boolean> = this._store.pipe(select(selectChartViewNextWeather));
  public imperialMeasure$: Observable<boolean> = this._store.pipe(select(selectImperialMeasure));

  constructor(private _store: Store, private router: Router) { }

  ngOnInit(): void { }

  public setImperialMeasure() {
    this._store.dispatch(setImperialMeasureAction());
  }

  public setDarkMode() {
    this._store.dispatch(setDarkThemeAction());
  }

  public toTheMainPage() {
    this.router.navigate(['']);
  }

  public changeChartView(value: boolean) {
    this._store.dispatch(setChartViewFutureWeatherAction({ value }))
  }
}
