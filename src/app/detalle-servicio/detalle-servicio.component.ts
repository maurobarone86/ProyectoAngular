import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Servicio } from '../_models/servicio';
import { ServicioService } from '../_services/servicios.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {
  servicio: Servicio = new Servicio();
  id: String;
  error: String;
  constructor(private route: ActivatedRoute, private servicioService: ServicioService) {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnInit(): void {
    console.log(this.id);
    this.servicioService.getService(this.id).subscribe(
      data => {
        this.servicio = data;
        console.log("Es el servicio ", this.servicio.nombre);
      }
      ,
      error => {
        this.error = 'No se Obtubieron corectamente los datos sel Servicio';
        console.error(error);
      }
    )
  }

}
