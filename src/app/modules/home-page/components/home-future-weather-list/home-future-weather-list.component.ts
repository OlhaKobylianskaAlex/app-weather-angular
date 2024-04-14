import { Component, Input, OnInit } from '@angular/core';
import { IFutureWeatherItem } from 'src/app/shared/interfaces/interfaces';


@Component({
  selector: 'app-home-future-weather-list',
  templateUrl: './home-future-weather-list.component.html',
  styleUrls: ['./home-future-weather-list.component.scss'],
})
export class HomeFutureWeatherListComponent implements OnInit {
  @Input() data: IFutureWeatherItem[] = [];

  constructor() { }

  ngOnInit(): void { }

}
