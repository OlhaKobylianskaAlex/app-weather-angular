import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { IAppSettingsState } from '../reducers/app-settings.reducers';
import { AppSettingsActions } from '../actions/app-settings.actions';

function saveLocalStorageDarkMode(flag: boolean) {
  localStorage.setItem('darkMode', JSON.stringify(flag));
}

function saveLocalStorageImperialMeasure(flag: boolean) {
  localStorage.setItem('imperialMeasure', JSON.stringify(flag));
}

function setDocumentAttribute(prop: string, value: string) {
  document.documentElement.setAttribute(prop, value);
}

let setInitValue = false;
export function themeReducer(reducer: ActionReducer<any>) {
  return function (state: IAppSettingsState | undefined, action: any) {
    if (state) {
      if (!setInitValue) {
        saveLocalStorageImperialMeasure(state.imperialMeasure);
        saveLocalStorageDarkMode(state.darkMode);
        setDocumentAttribute('dark-theme', `${state.darkMode}`);
        setInitValue = true;
      }
      if (action.type === AppSettingsActions.setDarkThemeAction) {
        saveLocalStorageDarkMode(!state.darkMode);
        setDocumentAttribute('dark-theme', `${!state.darkMode}`);
      }
      if (action.type === AppSettingsActions.setImperialMeasureAction) {
        saveLocalStorageImperialMeasure(!state.imperialMeasure);
      }
    }
    return reducer(state, action);
  };
}

export const themeMetaReducers: MetaReducer<IAppSettingsState, Action> = themeReducer;
