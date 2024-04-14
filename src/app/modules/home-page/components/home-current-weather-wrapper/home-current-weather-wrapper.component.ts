import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICurrentWeather } from 'src/app/shared/interfaces/interfaces';
import { selectCurrentWeatherLoading } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';

@Component({
  selector: 'app-home-current-weather-wrapper',
  templateUrl: './home-current-weather-wrapper.component.html',
  styleUrls: ['./home-current-weather-wrapper.component.scss'],
})
export class HomeCurrentWeatherWrapperComponent implements OnInit {

  public currentWeather$: Observable<{ loading: boolean; data: ICurrentWeather | null }> = this._store.pipe(select(selectCurrentWeatherLoading));

  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;

  constructor(private _store: Store) { }

  ngOnInit(): void { }
}
