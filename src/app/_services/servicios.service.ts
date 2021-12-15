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
}