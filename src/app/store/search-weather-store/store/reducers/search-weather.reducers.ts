import { Action, createReducer, on } from '@ngrx/store';
import * as searchWeatherActions from '../actions/search-weather.actions';
import { ICurrentWeather, IFavoriteLocation, ILocation, IFutureWeather } from 'src/app/shared/interfaces/interfaces';

export interface ISearchWeatherState {
  locations: ILocation[];
  locationsLoading: boolean;
  currentLocations: ILocation | null;
  currentWeather: ICurrentWeather | null;
  currentWeatherLoading: boolean;
  futureWeathers: IFutureWeather | null;
  futureWeatherLoading: boolean;
  favoriteLocations: IFavoriteLocation[];
  chartViewNextWeather: boolean;
}

const favoritesList = localStorage.getItem('favoritesLocations') ? JSON.parse(localStorage.getItem('favoritesLocations')!) : [];

const initialState: ISearchWeatherState = {
  locations: [],
  locationsLoading: false,
  currentLocations: null,
  currentWeather: null,
  currentWeatherLoading: false,
  futureWeathers: null,
  futureWeatherLoading: false,
  favoriteLocations: favoritesList,
  chartViewNextWeather: false,
}

const searchWeatherReducer = createReducer(
  initialState,
  on(
    searchWeatherActions.setSearchLocationsAction,
    (state, { data }): ISearchWeatherState => ({ ...state, locations: data })
  ),
  on(
    searchWeatherActions.setCurrentLocationAction,
    (state, { data }): ISearchWeatherState => ({ ...state, currentLocations: data })
  ),
  on(
    searchWeatherActions.setCurrentWeatherAction,
    (state, { data }): ISearchWeatherState => ({ ...state, currentWeather: data })
  ),
  on(
    searchWeatherActions.setFutureWeatherAction,
    (state, { data }): ISearchWeatherState => ({ ...state, futureWeathers: data })
  ),
  on(
    searchWeatherActions.setFavoriteLocationAction,
    (state, { data }): ISearchWeatherState => ({ ...state, favoriteLocations: [...state.favoriteLocations, data] })
  ),
  on(
    searchWeatherActions.deleteFavoriteLocationAction,
    (state, { data }): ISearchWeatherState => ({ ...state, favoriteLocations: state.favoriteLocations?.filter(item => +item.Key !== +data.Key) })
  ),
  on(
    searchWeatherActions.setChartViewFutureWeatherAction,
    (state, { value }): ISearchWeatherState => ({ ...state, chartViewNextWeather: value })
  ),
  on(
    searchWeatherActions.getCurrentWeatherAction,
    searchWeatherActions.setCurrentWeatherAction,
    (state, { type }): ISearchWeatherState => ({
      ...state,
      currentWeatherLoading:
        type === searchWeatherActions.SearchWeatherActions.getCurrentWeatherAction ? true : false,
    })
  ),
  on(
    searchWeatherActions.getFutureWeatherAction,
    searchWeatherActions.setFutureWeatherAction,
    (state, { type }): ISearchWeatherState => ({
      ...state,
      futureWeatherLoading:
        type === searchWeatherActions.SearchWeatherActions.getFutureWeatherAction ? true : false,
    })
  ),
  on(
    searchWeatherActions.getSearchLocationsAction,
    searchWeatherActions.setSearchLocationsAction,
    (state, { type }): ISearchWeatherState => ({
      ...state,
      locationsLoading:
        type === searchWeatherActions.SearchWeatherActions.getSearchLocationsAction ? true : false,
    })
  ),
  on(
    searchWeatherActions.getCurrentGeoLocationAction,
    searchWeatherActions.setCurrentLocationAction,
    (state, { type }): ISearchWeatherState => ({
      ...state,
      currentWeatherLoading:
        type === searchWeatherActions.SearchWeatherActions.getCurrentGeoLocationAction ? true : false,
    })
  ),
  on(
    searchWeatherActions.getDefaultLocationAction,
    searchWeatherActions.setCurrentLocationAction,
    (state, { type }): ISearchWeatherState => ({
      ...state,
      currentWeatherLoading:
        type === searchWeatherActions.SearchWeatherActions.getDefaultLocationAction ? true : false,
    })
  ),
);

export function SearchWeatherReducers(state: ISearchWeatherState | undefined, action: Action) {
  return searchWeatherReducer(state, action);
}

export const searchWeatherNode = 'searchWeather';
