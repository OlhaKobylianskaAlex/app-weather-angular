import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageMainComponent } from './components/favorites-page-main/favorites-page-main.component';
import { FavoritesPageWrapperComponent } from './components/favorites-page-wrapper/favorites-page-wrapper.component';
import { FavoritesPageRoutingModule } from './favorites-page-routing.module';
import { SearchWeatherStoreModule } from 'src/app/store/search-weather-store/search-weather-store.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesCardsComponent } from './components/favorites-cards/favorites-cards.component';



@NgModule({
  declarations: [FavoritesPageMainComponent, FavoritesPageWrapperComponent, FavoritesCardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesPageRoutingModule,
    SearchWeatherStoreModule,
    MatCardModule,
    MatIconModule
  ]
})
export class FavoritesPageModule { }
