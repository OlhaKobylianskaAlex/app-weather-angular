import { createAction, props } from '@ngrx/store';
import { ICurrentWeather, IFavoriteLocation, ILocation, IFutureWeather } from 'src/app/shared/interfaces/interfaces';

export enum SearchWeatherActions {
  getSearchLocationsAction = '[SEARCH_WEATHER] GET_SEARCH_LOCATIONS_LOADING',
  setSearchLocationsAction = '[SEARCH_WEATHER] SET_SEARCH_LOCATIONS_LOADING',

  getDefaultLocationAction = '[SEARCH_WEATHER] GET_DEFAULT_LOCATION',
  getCurrentGeoLocationAction = '[SEARCH_WEATHER] GET_GEO_LOCATION',
  setCurrentLocationAction = '[SEARCH_WEATHER] SET_SEARCH_WEATHER_ACTIVE_LOCATION',

  getCurrentWeatherAction = '[SEARCH_WEATHER] GET_CURRENT_WEATHER',
  setCurrentWeatherAction = '[SEARCH_WEATHER] SET_CURRENT_WEATHER',

  getFutureWeatherAction = '[SEARCH_WEATHER] GET_FUTURE_WEATHER',
  setFutureWeatherAction = '[SEARCH_WEATHER] SET_FUTURE_WEATHER',

  setFavoriteLocationAction = '[SEARCH_WEATHER] SET_FAVORITE_LOCATION',
  deleteFavoriteLocationAction = '[SEARCH_WEATHER] DELETE_FAVORITE_LOCATION',

  chartViewFutureWeatherAction = '[SEARCH_WEATHER] CHART_VIEW_FUTURE_WEATHER',
}

export const getSearchLocationsAction = createAction(
  SearchWeatherActions.getSearchLocationsAction,
  props<{ value: string }>()
);
export const setSearchLocationsAction = createAction(
  SearchWeatherActions.setSearchLocationsAction,
  props<{ data: ILocation[] }>()
);

export const getCurrentWeatherAction = createAction(SearchWeatherActions.getCurrentWeatherAction);
export const setCurrentWeatherAction = createAction(
  SearchWeatherActions.setCurrentWeatherAction,
  props<{ data: ICurrentWeather | null }>()
);

export const getFutureWeatherAction = createAction(SearchWeatherActions.getFutureWeatherAction);
export const setFutureWeatherAction = createAction(
  SearchWeatherActions.setFutureWeatherAction,
  props<{ data: IFutureWeather | null }>()
);

export const getDefaultLocationAction = createAction(SearchWeatherActions.getDefaultLocationAction);
export const getCurrentGeoLocationAction = createAction(
  SearchWeatherActions.getCurrentGeoLocationAction,
  props<{ lat: number, lon: number }>()
);
export const setCurrentLocationAction = createAction(
  SearchWeatherActions.setCurrentLocationAction,
  props<{ data: ILocation }>()
);

export const setFavoriteLocationAction = createAction(
  SearchWeatherActions.setFavoriteLocationAction,
  props<{ data: IFavoriteLocation }>()
);
export const deleteFavoriteLocationAction = createAction(
  SearchWeatherActions.deleteFavoriteLocationAction,
  props<{ data: IFavoriteLocation }>()
);

export const setChartViewFutureWeatherAction = createAction(
  SearchWeatherActions.chartViewFutureWeatherAction,
  props<{ value: boolean }>()
);
