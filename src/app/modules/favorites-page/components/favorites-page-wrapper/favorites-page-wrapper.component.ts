import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFavoriteLocation } from 'src/app/shared/interfaces/interfaces';
import { selectFavoritesLocations } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';


@Component({
  selector: 'app-favorites-page-wrapper',
  templateUrl: './favorites-page-wrapper.component.html',
  styleUrls: ['./favorites-page-wrapper.component.scss'],
})
export class FavoritesPageWrapperComponent implements OnInit {
  public favoritesLocations$: Observable<IFavoriteLocation[]> = this._store.pipe(select(selectFavoritesLocations));

  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;
  constructor(private _store: Store) { }

  ngOnInit(): void { }
}
