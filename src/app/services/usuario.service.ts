import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { UsuarioCommand } from '../models/commands/usuarioCommand';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private BASE_URL: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  createUsuario(command: UsuarioCommand): Observable<any> {
    return this.http.post(`${this.BASE_URL}/usuario`, command);
  }

}
