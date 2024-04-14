import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, Subscription, auditTime, debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
import { ILocation } from 'src/app/shared/interfaces/interfaces';
import { getSearchLocationsAction, setCurrentLocationAction } from 'src/app/store/search-weather-store/store/actions/search-weather.actions';
import { selectSearchLocationsAutocomplite } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent implements OnInit, OnDestroy {
  public filteredLocations$: Observable<{ loading: boolean, data: ILocation[] }> = this._store.pipe(select(selectSearchLocationsAutocomplite));
  public form: FormGroup = new FormGroup({
    value: new FormControl(''),
  });
  public search$: Subject<string> = new Subject<string>();
  public loader$: Subject<boolean> = new Subject();

  private _subscription: Subscription;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.search$
      .pipe(
        tap((value) => {
          if (value?.trim().length > 0) this.loader$.next(true);
          else this.loader$.next(false);
        }),
        auditTime(1000),
        map((value: string) => value.trim()),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        if (value?.trim().length > 0) {
          this._store.dispatch(getSearchLocationsAction({ value }));
          this.loader$.next(false);
        }
      });
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  public onSearchSubmit() {
    this.search$.next(this.form.value.value.trim());
  }

  public selectCurrentLocation(item: ILocation) {
    this._store.dispatch(setCurrentLocationAction({ data: item }));
  }
}
