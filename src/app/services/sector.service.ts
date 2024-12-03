import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Sector } from '../models/sector';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private BASE_URL: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSectores(): Observable<Sector[]> {
    return this.http.get<{ data: Sector[] }>(`${this.BASE_URL}/sector/todos`).pipe(
      map(response => response.data) // Extrae la propiedad 'data', que es un array
    );
  }
}
