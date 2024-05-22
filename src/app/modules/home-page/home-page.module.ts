import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageMainComponent } from './components/home-page-main/home-page-main.component';
import { HomeCurrentWeatherWrapperComponent } from './components/home-current-weather-wrapper/home-current-weather-wrapper.component';
import { HomeFutureWeatherWrapperComponent } from './components/home-future-weather-wrapper/home-home-future-weather-wrapper.component';
import { HomeRoutingModule } from './home-page-routing.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchWeatherStoreModule } from 'src/app/store/search-weather-store/search-weather-store.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { HomeFutureWeatherChartComponent } from './components/home-future-weather-chart/home-future-weather-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { HomeFutureWeatherListComponent } from './components/home-future-weather-list/home-future-weather-list.component';
import { HomeCurrentWeatherComponent } from './components/home-current-weather/home-current-weather.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoundPipe } from 'src/app/shared/pipes/round.pipe';


@NgModule({
  declarations: [
    HomePageMainComponent,
    HomeSearchComponent,
    HomeCurrentWeatherWrapperComponent,
    HomeCurrentWeatherComponent,
    HomeFutureWeatherWrapperComponent,
    HomeFutureWeatherListComponent,
    HomeFutureWeatherChartComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SearchWeatherStoreModule,
    NgChartsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
  ]
})
export class HomeModule { }
