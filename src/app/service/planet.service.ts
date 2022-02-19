import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  url = "http://localhost:4000/api/planets/"
  
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any>{
    return this.http.get(this.url)
  }

  deletePlanet(id: string): Observable<any>{
    return this.http.delete(this.url + id)
  }

  addPlanet(planet: Planet): Observable<any>{
    return this.http.post(this.url, planet)
  }

  getPLanetbyId(id: string): Observable<any>{
    return this.http.get(this.url + id)
  }

  editPlanet(id: string, planet: Planet): Observable<any>{
    return this.http.put(this.url + id, planet)
  }
}
