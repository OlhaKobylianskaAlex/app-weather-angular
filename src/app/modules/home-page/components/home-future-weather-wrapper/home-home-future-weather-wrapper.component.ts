import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFutureWeather } from 'src/app/shared/interfaces/interfaces';
import { selectFutureWeatherLoading } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';


@Component({
  selector: 'app-home-home-future-weather-wrapper',
  templateUrl: './home-home-future-weather-wrapper.component.html',
  styleUrls: ['./home-home-future-weather-wrapper.component.scss'],
})
export class HomeFutureWeatherWrapperComponent implements OnInit {
  public futureWeather$: Observable<{ loading: boolean; data: IFutureWeather | null }> = this._store.pipe(select(selectFutureWeatherLoading));

  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;

  constructor(private _store: Store) { }

  ngOnInit(): void { }
}
