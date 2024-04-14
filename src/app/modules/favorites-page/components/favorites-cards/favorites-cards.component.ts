import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFavoriteLocation } from 'src/app/shared/interfaces/interfaces';
import { selectImperialMeasure } from 'src/app/store/app-settings-store/store/selectors/app-settings.selectors';
import { setCurrentLocationAction } from 'src/app/store/search-weather-store/store/actions/search-weather.actions';

@Component({
  selector: 'app-favorites-cards',
  templateUrl: './favorites-cards.component.html',
  styleUrls: ['./favorites-cards.component.scss'],
})
export class FavoritesCardsComponent implements OnInit {
  @Input() data: IFavoriteLocation[] = [];

  public imperialMeasure$: Observable<boolean> = this._store.pipe(select(selectImperialMeasure));

  constructor(private _store: Store, private _router: Router) { }

  ngOnInit(): void { }

  public toTheCurrentWeather(item: IFavoriteLocation) {
    this._store.dispatch(setCurrentLocationAction({ data: item }));
    this._router.navigate(['']);
  }
}
