import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICurrentWeather, ILocation, IFutureWeather } from 'src/app/shared/interfaces/interfaces';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _cacheDefaultLocation: Map<string, Observable<ILocation>> = new Map();
  private _cacheCurrentGeoLocation: Map<string, Observable<ILocation>> = new Map();
  private _cacheSearchLocationsAutocomolite: Map<string, Observable<ILocation[]>> = new Map();
  private _cacheCurrentWeather: Map<number, Observable<ICurrentWeather>> = new Map();
  private _cacheFutureWeather: Map<number, Observable<IFutureWeather>> = new Map();

  constructor(private http: HttpClient) { }

  getDefaultLocation(locationKey: number) {
    if (!this._cacheDefaultLocation.has(`${locationKey}`)) {
      const data = this._getDefaultLocation(locationKey).pipe(
        catchError((error: any) => throwError(() => `Error: ${error}`))
      );
      this._cacheDefaultLocation.set(`${locationKey}`, data)!;
    }
    return this._cacheDefaultLocation.get(`${locationKey}`)!;
  }
  _getDefaultLocation(locationKey: number): Observable<ILocation> {
    return this.http.get<ILocation>(`/locations/v1/${locationKey}`);
  }

  getCurrentGeoLocation(lat: number, lon: number) {
    if (!this._cacheCurrentGeoLocation.has(`${lat},${lon}`)) {
      const data = this._getCurrentGeoLocation(`${lat},${lon}`).pipe(
        catchError((error: any) => throwError(() => `Error: ${error}`))
      );
      this._cacheCurrentGeoLocation.set(`${lat},${lon}`, data)!;
    }
    return this._cacheCurrentGeoLocation.get(`${lat},${lon}`)!;
  }
  _getCurrentGeoLocation(search: string): Observable<ILocation> {
    return this.http.get<ILocation>(`/locations/v1/cities/geoposition/search`, { params: { q: search } })
  }


  getSearchLocationsAutocomplite(search: string): Observable<ILocation[]> {
    if (!this._cacheSearchLocationsAutocomolite.has(search)) {
      const data = this._getSearchLocationsAutocomplite(search).pipe(
        catchError((error: any) => throwError(() => `Error: ${error}`))
      );
      this._cacheSearchLocationsAutocomolite.set(search, data)!;
    }
    return this._cacheSearchLocationsAutocomolite.get(search)!;
  }
  _getSearchLocationsAutocomplite(search: string): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`/locations/v1/cities/autocomplete`, { params: { q: search } })
  }


  getCurrentWeather(locationKey: number): Observable<ICurrentWeather> {
    if (!this._cacheCurrentWeather.has(locationKey)) {
      const data = this._getCurrentWeather(locationKey).pipe(
        catchError((error: any) => throwError(() => `Error: ${error}`))
      );
      this._cacheCurrentWeather.set(locationKey, data);
    }
    return this._cacheCurrentWeather.get(locationKey)!
  }
  _getCurrentWeather(locationKey: number): Observable<ICurrentWeather> {
    return this.http.get<ICurrentWeather[]>(`/currentconditions/v1/${locationKey}`).pipe(
      map(data => data[0])
    );
  }


  getFutureWeather(locationKey: number): Observable<IFutureWeather> {
    if (!this._cacheFutureWeather.has(locationKey)) {
      const data = this._getFutureWeather(locationKey).pipe(
        catchError((error: any) => throwError(() => `Error: ${error}`))
      );
      this._cacheFutureWeather.set(locationKey, data);
    }
    return this._cacheFutureWeather.get(locationKey)!
  }
  _getFutureWeather(locationKey: number): Observable<IFutureWeather> {
    return this.http.get<IFutureWeather>(`/forecasts/v1/daily/5day/${locationKey}`, { params: { metric: true } });
  }

}
