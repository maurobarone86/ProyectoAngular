import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';


import { Servicio } from '../_models/servicio';

@Injectable({ providedIn: 'root' })
export class ServicioService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Servicio[]>(`${env.url}/apiServicio/serviciosActivos`);
    }

    getPorID(id: String) {
        return this.http.get<Servicio[]>(`${env.url}/api/usuario/servicios/` + id);
    }
    public postServicioById(id:String, servicio:Servicio){
    
        return this.http.post(`${env.url}/api/usuario/altaServicio/`+id, servicio, {observe: 'response'})
      }

    public delServicioById(id:Number){
        return this.http.delete(`${env.url}/apiServicio/deleteLogico/`+id, {observe: 'response'})
    }
}