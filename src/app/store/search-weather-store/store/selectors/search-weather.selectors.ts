import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISearchWeatherState, searchWeatherNode } from '../reducers/search-weather.reducers';

const selectSearchWeatherFuture = createFeatureSelector<ISearchWeatherState>(searchWeatherNode);

export const selectSearchLocationsAutocomplite = createSelector(
  selectSearchWeatherFuture,
  (state) => ({
    loading: state.locationsLoading,
    data: state.locations
  })
);

export const selectCurrentLocation = createSelector(
  selectSearchWeatherFuture,
  (state) => state.currentLocations
);

export const selectCurrentWeatherLoading = createSelector(selectSearchWeatherFuture, (state) => ({
  loading: state.currentWeatherLoading,
  data: state.currentWeather,
}));

export const selectFutureWeatherLoading = createSelector(selectSearchWeatherFuture, (state) => ({
  loading: state.futureWeatherLoading,
  data: state.futureWeathers,
}));

export const selectFavoritesLocations = createSelector(selectSearchWeatherFuture, (state) => (state.favoriteLocations));
export const selectChartViewNextWeather = createSelector(selectSearchWeatherFuture, (state) => (state.chartViewNextWeather));
