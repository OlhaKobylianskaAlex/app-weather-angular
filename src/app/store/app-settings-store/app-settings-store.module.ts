import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { appSettingsNode, AppSettingsReducers } from './store/reducers/app-settings.reducers';
import { themeMetaReducers } from './store/meta-reducers/yh-theme.meta-reducers';

const metaReducers: MetaReducer<any>[] = [themeMetaReducers];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(appSettingsNode, AppSettingsReducers, { metaReducers: metaReducers }),
  ],
})
export class AppSettingsStoreModule { }
