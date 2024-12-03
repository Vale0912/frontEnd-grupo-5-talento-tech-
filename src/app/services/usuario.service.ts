import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { UsuarioCommand } from '../models/commands/usuarioCommand';
import { Inversionista } from '../models/inversionista';
import { Emprendedor } from '../models/emprendedor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private BASE_URL: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  createUsuario(command: UsuarioCommand): Observable<any> {
    return this.http.post(`${this.BASE_URL}/usuario`, command);
  }

  createInversionista(inversionista: Inversionista): Observable<any> {
    return this.http.post(`${this.BASE_URL}/inversionista`, inversionista);
  }

  createEmprendedor(emprendedor: Emprendedor): Observable<any> {
    return this.http.post(`${this.BASE_URL}/emprendedor`, emprendedor);
  }

}
