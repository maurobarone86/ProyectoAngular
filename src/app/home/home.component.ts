import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { CarteleraService } from '../_services';

import { Cartelera } from '../_models/Cartelera';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

    carteleras: Cartelera[] = [];
    error: string = '';
    loading: boolean = false;

    constructor(private carteleraService: CarteleraService) { }

    ngOnInit() {

        this.loading = true;
        this.carteleraService.getAll()
            .subscribe(
                data => {
                    this.loading = false;
                    this.carteleras = data;
                },
                error => {
                    this.error = 'No se pudieron cargar las carteleras porque las borre completamente del backend pero funcionaban bien, deje este como ejemplo de consumo api rest';
                    this.loading = false;
                    console.error(error);
                }
            )
    }
}