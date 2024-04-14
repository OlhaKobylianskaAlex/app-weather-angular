import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppSettingsState, appSettingsNode } from '../reducers/app-settings.reducers';

const selectAppSettingsFuture = createFeatureSelector<IAppSettingsState>(appSettingsNode);

export const selectImperialMeasure = createSelector(selectAppSettingsFuture, (state) => state.imperialMeasure);
export const selectThemeDarkMode = createSelector(selectAppSettingsFuture, (state) => state.darkMode);
