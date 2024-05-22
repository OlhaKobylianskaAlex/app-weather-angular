import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFutureWeatherItem } from 'src/app/shared/interfaces/interfaces';
import { selectImperialMeasure } from 'src/app/store/app-settings-store/store/selectors/app-settings.selectors';


@Component({
  selector: 'app-home-future-weather-list',
  templateUrl: './home-future-weather-list.component.html',
  styleUrls: ['./home-future-weather-list.component.scss'],
})
export class HomeFutureWeatherListComponent implements OnInit {
  @Input() data: IFutureWeatherItem[] = [];
  public imperialMeasure$: Observable<boolean> = this._store.pipe(select(selectImperialMeasure));

  constructor(private _store: Store) { }

  ngOnInit(): void { }

}
