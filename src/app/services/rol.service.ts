import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private BASE_URL: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return this.http.get<{ data: Rol[] }>(`${this.BASE_URL}/rol/todos`).pipe(
      map(response => response.data) // Extrae la propiedad 'data', que es un array
    );
  }
}
