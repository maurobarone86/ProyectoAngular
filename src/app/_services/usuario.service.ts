import { Injectable, ɵRuntimeErrorCode } from '@angular/core';
import { Usuario } from '../_models/usuario';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  crearUsuario(usuario:Usuario) {
      return this.http.post(`${env.url}/api/usuario`, usuario, {observe: 'response'});
  }/*
  crearUsuario(usuario:Usuario) {
    return this.http.post<Usuario[]>(`${env.url}/api/usuario`, usuario).pipe(
      catchError((err: any) => {return of(usuario)}));
}*/
}
