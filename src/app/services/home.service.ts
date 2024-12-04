import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendimiento } from '../models/emprendimiento';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { EmprendimientoCommand } from '../models/commands/EmprendimientoCommand';
import { Emprendedor } from '../models/emprendedor';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private BASE_URL: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  createEmprendimiento(command: EmprendimientoCommand): Observable<Emprendimiento>{
    return this.http.post<Emprendimiento>(`${this.BASE_URL}/emprendimiento`, command)
  }

  getEmprendimientos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/emprendimiento`);
  }

  getEmprendimientosByEmprendedor(idEmprendedor: number): Observable<Emprendimiento[]>{
    return this.http.get<{data: Emprendimiento[]}>(`${this.BASE_URL}/emprendimiento/por-emprendedor/${idEmprendedor}`).pipe(map(response => response.data));
  }

  getEmprendedorById(idEmprendedor: number): Observable<Emprendedor>{
    return this.http.get<{data: Emprendedor}>(`${this.BASE_URL}/emprendedor/${idEmprendedor}`).pipe(map(response => response.data));
}
}
