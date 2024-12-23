import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/Country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    if (this.isLocalStorageAvailable()) {
      this.loadFromLocalStorage();
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined';
    } catch (error) {
      return false;
    }
  }

  private saveToLocalStorage() {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }
  }

  private loadFromLocalStorage() {
    if (this.isLocalStorageAvailable() && localStorage.getItem('cacheStore')) {
      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
      tap(countries => this.cacheStore.byCapital = { term, countries }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`).pipe(
      tap(countries => this.cacheStore.byCountries = { term, countries }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`).pipe(
      tap(countries => this.cacheStore.byRegion = { region, countries }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchById(id: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${id}`).pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    );
  }
}
