import { Injectable } from '@angular/core';
import { Usuario } from '../_models/usuario';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  public crearUsuario(usuario:Usuario){
      return this.http.post(`${env.url}/api/usuario`, usuario, {observe: 'response'})
  }
}
