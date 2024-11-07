import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/Country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore:CacheStore={
    byCapital:{term:'',countries:[]},
    byCountries:{term:'',countries:[]},
    byRegion:{region:'',countries:[]},
  }

  constructor(
    private http: HttpClient
  ) {}

  searchCapital(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        tap(
          countries=>this.cacheStore.byCapital={term,countries}

        )
      );
  }
  searchCountry(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        catchError(() => of([])),
        // delay(2000),
      )
  }
  searchRegion(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${term}`)
      .pipe(catchError(() => of([])));
  }

  searchById(id:string):Observable<Country | null>{
    return this.http
    .get<Country[]>(`${this.apiUrl}/alpha/${id}`)
    .pipe(
      map(countries=> countries.length>0 ? countries[0]:null),
      catchError(
        ()=>of(null)
      )
    )
  }
}
