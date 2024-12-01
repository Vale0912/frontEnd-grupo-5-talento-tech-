import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl = "http://localhost:8080/conectacol/rol/todos"

  constructor(private http: HttpClient) { }

  getRoles(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data) // Extrae la propiedad 'data'
    );
  }
}
