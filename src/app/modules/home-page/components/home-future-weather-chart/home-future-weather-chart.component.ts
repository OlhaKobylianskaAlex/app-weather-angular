import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { Observable, Subscription, combineLatest, tap } from 'rxjs';
import { ILocation, IFutureWeatherItem } from 'src/app/shared/interfaces/interfaces';
import { selectImperialMeasure } from 'src/app/store/app-settings-store/store/selectors/app-settings.selectors';
import { selectCurrentLocation } from 'src/app/store/search-weather-store/store/selectors/search-weather.selectors';


@Component({
  selector: 'app-home-future-weather-chart',
  templateUrl: './home-future-weather-chart.component.html',
  styleUrls: ['./home-future-weather-chart.component.scss'],
})
export class HomeFutureWeatherChartComponent implements OnInit, OnDestroy {
  @Input() data: IFutureWeatherItem[] = [];

  public chart: Chart;
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartConfiguration['data'];
  public lineChartOptions: ChartConfiguration['options'];
  public width: number = innerWidth - 100;

  private dataSetDay: number[] = [];
  private dataSetNight: number[] = [];
  private labels: string[] = [];
  private axisY: string = 'F';

  public dataChanges$: Observable<[boolean, ILocation | null]> = combineLatest([
    this._store.pipe(select(selectImperialMeasure)),
    this._store.pipe(select(selectCurrentLocation)),
  ]).pipe(
    tap(([imperialMeasure, currentLocation]) => {
      this.axisY = imperialMeasure ? 'F' : '°C';
      this.createChart();
    })
  );

  private subscription: Subscription;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.initData();
    this.subscription = this.dataChanges$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public initData() {
    this.data.forEach(day => {
      this.dataSetDay.push(day.Temperature.Maximum.Value);
      this.dataSetNight.push(day.Temperature.Minimum.Value);
      this.labels.push(this.daysOfWeek(new Date(day.Date).getDay()));
    })
  }

  public daysOfWeek(value: number): string {
    switch (value) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
      default: return 'Day';
    }
  }

  public createChart() {
    this.lineChartData = {
      datasets: [
        {
          data: this.dataSetDay,
          label: `Max`,
          borderColor: 'rgb(220,20,60)',
          pointBackgroundColor: 'rgb(220,20,60)',
          pointBorderColor: 'rgba(181, 190, 200)',
        },
        {
          data: this.dataSetNight,
          label: 'Min',
          borderColor: 'rgb(31, 81, 158)',
          pointBackgroundColor: 'rgb(31, 81, 158)',
          pointBorderColor: 'rgba(181, 190, 200)',
        }
      ],
      labels: this.labels
    };

    this.lineChartOptions = {
      elements: { line: { tension: 0.5 } },
      scales: {
        y: {
          position: 'left',
          title: {
            display: true,
            text: this.axisY,
            font: {
              size: 14
            }
          }
        }
      },
      hover: { mode: 'nearest', intersect: true },
      plugins: { legend: { display: false }, }
    };
  }
}
