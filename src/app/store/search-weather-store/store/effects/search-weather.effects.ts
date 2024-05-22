import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  getSearchLocationsAction,
  setSearchLocationsAction,
  getCurrentGeoLocationAction,
  setCurrentLocationAction,
  getCurrentWeatherAction,
  setCurrentWeatherAction,
  getFutureWeatherAction,
  setFutureWeatherAction,
  getDefaultLocationAction
} from '../actions/search-weather.actions';
import { DataService } from 'src/app/services/data-services/data.service';
import { Store, select } from '@ngrx/store';
import { selectCurrentLocation } from '../selectors/search-weather.selectors';
import { CONSTANTS } from 'src/app/core-constants/constants';


@Injectable()
export class SearchWeatherEffects {
  constructor(private _actions$: Actions, private _data: DataService, private _store: Store) { }

  getDefaultLocationAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getDefaultLocationAction),
      switchMap((action) =>
        this._data.getDefaultLocation(CONSTANTS.DEFAULT_LOCATION_KEY).pipe(
          map(data => setCurrentLocationAction({ data }))
        )
      )
    );
  });

  getGeoLocationAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getCurrentGeoLocationAction),
      switchMap((action) =>
        this._data.getCurrentGeoLocation(action.lat, action.lon).pipe(
          map(data => setCurrentLocationAction({ data }))
        )
      )
    );
  });

  setCurrentLocationAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(setCurrentLocationAction),
      mergeMap(() => [
        getCurrentWeatherAction(),
        getFutureWeatherAction(),
      ]),
    );
  });

  getSearchLocationsAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getSearchLocationsAction),
      switchMap((action) =>
        this._data.getSearchLocationsAutocomplite(action.value).pipe(
          map((data) => setSearchLocationsAction({ data }))
        )
      )
    );
  });

  getCurrentWeatherAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getCurrentWeatherAction),
      withLatestFrom(this._store.pipe(select(selectCurrentLocation))),
      switchMap(([action, location]) =>
        this._data.getCurrentWeather(location?.Key || CONSTANTS.DEFAULT_LOCATION_KEY).pipe(
          map(data => setCurrentWeatherAction({ data }))
        )
      )
    );
  });

  getFutureWeatherAction$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getFutureWeatherAction),
      withLatestFrom(this._store.pipe(select(selectCurrentLocation))),
      switchMap(([action, location]) =>
        this._data.getFutureWeather(location?.Key || CONSTANTS.DEFAULT_LOCATION_KEY).pipe(
          map(data => setFutureWeatherAction({ data }))
        )
      )
    );
  });
}
