import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { ICurrentWeather, IFavoriteLocation, ILocation } from 'src/app/shared/interfaces/interfaces';
import { selectImperialMeasure } from 'src/app/store/app-settings-store/store/selectors/app-settings.selectors';
import { deleteFavoriteLocationAction, getFutureWeatherAction, setFavoriteLocationAction } from 'src/app/store/search-weather-store/store/actions/search-weather.actions';
import { selectCurrentLocation, selectFavoritesLocations } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';


@Component({
  selector: 'app-home-current-weather',
  templateUrl: './home-current-weather.component.html',
  styleUrls: ['./home-current-weather.component.scss'],
})
export class HomeCurrentWeatherComponent implements OnInit {
  @Input() data: ICurrentWeather;

  public activeLocation$: Observable<ILocation | null> = this._store.pipe(select(selectCurrentLocation));
  public imperialMeasure$: Observable<boolean> = this._store.pipe(select(selectImperialMeasure)).pipe(
    tap(data => this._store.dispatch(getFutureWeatherAction()))
  );
  public isFavoritesLocation$: Observable<boolean> = combineLatest([this._store.pipe(select(selectCurrentLocation)), this._store.pipe(select(selectFavoritesLocations))]).pipe(
    map(([location, favorites]) => location && favorites.find(item => +item.Key === +location.Key) ? true : false),
  )

  constructor(private _store: Store) { }

  ngOnInit(): void { }

  public addDeleteFromFavorites(item: ILocation, current: ICurrentWeather, flag: boolean) {
    if (flag) this._store.dispatch(setFavoriteLocationAction({ data: { ...item, ...current } }));
    else this._store.dispatch(deleteFavoriteLocationAction({ data: { ...item, ...current } }))

    if (localStorage.getItem('favoritesLocations')) {
      let data = JSON.parse(localStorage.getItem('favoritesLocations')!);
      if (flag) localStorage.setItem('favoritesLocations', JSON.stringify([...data, { ...item, ...current }]));
      else localStorage.setItem('favoritesLocations', JSON.stringify(data.filter((location: IFavoriteLocation) => location.Key !== +item.Key)));
    } else if (flag) localStorage.setItem('favoritesLocations', JSON.stringify([{ ...item, ...current }]));
  }
}
