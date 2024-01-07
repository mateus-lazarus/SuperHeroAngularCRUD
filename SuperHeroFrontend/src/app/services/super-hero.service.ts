import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private uri = 'http://localhost:5207'
  private path = 'SuperHero'

  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(
      `${this.uri}/${this.path}`
    );
  }

  public updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${this.uri}/${this.path}`,
      hero
    );
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${this.uri}/${this.path}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${this.uri}/${this.path}/${hero.id}`
    );
  }
}
