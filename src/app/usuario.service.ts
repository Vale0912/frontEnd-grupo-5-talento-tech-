import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum TipoDocumento {
  CEDULA_CIUDADANIA = 'CC',
  TARJETA_IDENTIDAD = 'TI',
  CEDULA_EXTRANJERIA = 'CE',
  PASAPORTE = 'PAS',
  REGISTRO_CIVIL = 'RC',
  NIT = 'NIT'
}

export interface Usuario {
  idUsuario: number;
  tipoDocumento: TipoDocumento;
  documento: string;
  nombre: string;
  apellidos: string;
  correoElectronico: string;
  contrasenia:string;
  edad: number;
  celular: number;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = "http://localhost:8080/conectacol/usuario"

  constructor(private http: HttpClient) { }

  //Metodos

  createUser(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUrl, usuario)
  }
  
}
