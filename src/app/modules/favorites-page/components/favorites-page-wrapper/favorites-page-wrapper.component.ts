import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { DataService } from 'src/app/services/data-services/data.service';
import { IFavoriteLocation, ILocation } from 'src/app/shared/interfaces/interfaces';
import { selectFavoritesLocations } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';


@Component({
  selector: 'app-favorites-page-wrapper',
  templateUrl: './favorites-page-wrapper.component.html',
  styleUrls: ['./favorites-page-wrapper.component.scss'],
})
export class FavoritesPageWrapperComponent implements OnInit {
  public favoritesLocations$: Observable<IFavoriteLocation[]> = this._store.pipe(
    select(selectFavoritesLocations),
    switchMap(keys => forkJoin(keys.map((data: ILocation) => this._dataService.getCurrentWeather(+data.Key).pipe(
      map(item => ({ ...item, ...data }))
    )))
    )
  );

  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;
  constructor(private _store: Store, private _dataService: DataService) { }

  ngOnInit(): void { }
}
