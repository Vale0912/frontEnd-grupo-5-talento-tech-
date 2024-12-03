import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendimiento } from '../models/emprendimiento';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmprendimientoService {

  private BASE_URL: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getEmprendimientos(): Observable<Emprendimiento[]> {
    return this.http.get<{data: Emprendimiento[]}>(`${this.BASE_URL}/emprendimiento/todos`).pipe(
      map(response => response.data) // Extrae la propiedad 'data', que es un array
    );
  }
}
