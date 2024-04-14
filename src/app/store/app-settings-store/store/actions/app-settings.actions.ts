import { createAction } from '@ngrx/store';

export enum AppSettingsActions {
  setImperialMeasureAction = '[APP_SETTINGS] SET_APP_IMPERIAL_MEASURE',
  setDarkThemeAction = '[APP_SETTINGS] SET_APP_DARK_THEME',
}

export const setImperialMeasureAction = createAction(AppSettingsActions.setImperialMeasureAction);
export const setDarkThemeAction = createAction(AppSettingsActions.setDarkThemeAction);
