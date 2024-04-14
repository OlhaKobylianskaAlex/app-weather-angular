import { Action, createReducer, on } from '@ngrx/store';
import * as appSettingsActions from '../actions/app-settings.actions';

export interface IAppSettingsState {
  darkMode: boolean;
  imperialMeasure: boolean;
}

const detectDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const mode = localStorage.getItem('darkMode');
const modeDef = mode === 'false' || mode === 'true' ? JSON.parse(mode) : detectDarkMode;

const imperialMeasure = JSON.parse(localStorage.getItem('imperialMeasure') || 'false')

const initialState: IAppSettingsState = {
  darkMode: modeDef,
  imperialMeasure: imperialMeasure
};

const appSettingsReducer = createReducer(
  initialState,
  on(appSettingsActions.setImperialMeasureAction, (state): IAppSettingsState => ({
    ...state, imperialMeasure: !state.imperialMeasure
  })),
  on(appSettingsActions.setDarkThemeAction, (state): IAppSettingsState => ({
    ...state, darkMode: !state.darkMode
  }))
);

export function AppSettingsReducers(state: IAppSettingsState | undefined, action: Action) {
  return appSettingsReducer(state, action);
}

export const appSettingsNode = 'appSettings';
