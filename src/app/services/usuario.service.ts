import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

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
