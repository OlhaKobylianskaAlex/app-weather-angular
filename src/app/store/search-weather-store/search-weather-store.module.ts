import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { searchWeatherNode, SearchWeatherReducers } from './store/reducers/search-weather.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SearchWeatherEffects } from './store/effects/search-weather.effects';
import { _createStoreReducers } from '@ngrx/store/src/store_config';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(searchWeatherNode, SearchWeatherReducers),
    EffectsModule.forFeature([SearchWeatherEffects]),
  ],
})
export class SearchWeatherStoreModule { }
