import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendimiento } from '../models/emprendimiento';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = "http://localhost:8080/conectacol/emprendimiento"

  constructor(private http: HttpClient) { }

  createEmprendimiento(emprendimiento: Emprendimiento): Observable<Emprendimiento>{
    return this.http.post<Emprendimiento>(this.apiUrl, emprendimiento)
  }

  getEmprendimientos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmprendimientosByEmprendedor(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
