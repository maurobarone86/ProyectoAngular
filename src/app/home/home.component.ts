import { Component } from '@angular/core';

import { ServicioService } from '../_services/servicios.service';
import { AuthenticationService } from '../_services';

import { Usuario } from '../_models/usuario';
import { Servicio } from '../_models/servicio';

@Component({ templateUrl: 'home.component.html', styleUrls: ['home.component.css'] })
export class HomeComponent {
    servicios: Servicio[] = [];
    error: string = '';
    loading: boolean = false;

    constructor(private servicioService: ServicioService,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.loading = true;
        this.servicioService.getAll()
            .subscribe(
                data => {
                    this.loading = false;
                    this.servicios = data;
                },
                error => {
                    this.error = 'No se pudieron cargar las carteleras porque las borre completamente del backend pero funcionaban bien, deje este como ejemplo de consumo api rest';
                    this.loading = false;
                    console.error(error);
                }
            )
    }
    logout() {
        this.authenticationService.logout();
        //this.router.navigate(['/login']);
    }
}