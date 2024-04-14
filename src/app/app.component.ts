import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentGeoLocationAction, getCurrentWeatherAction, getDefaultLocationAction, getSearchLocationsAction } from './store/search-weather-store/store/actions/search-weather.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(getDefaultLocationAction());

    if (!navigator.geolocation) {
      console.log('location is not supported')
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position.coords.latitude && position.coords.longitude) this._store.dispatch(getCurrentGeoLocationAction({ lat: position.coords.latitude, lon: position.coords.longitude }));
      })
    }
  }
}
