import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Servicio } from '../_models/servicio';
import { ServicioService } from '../_services/servicios.service';
import { Usuario } from '../_models/usuario';
@Component({
  selector: 'app-edit-servicio',
  templateUrl: './edit-servicio.component.html',
  styleUrls: ['./edit-servicio.component.css']
})
export class EditServicioComponent implements OnInit {
  servicio: Servicio = new Servicio();
  usuario = new Usuario();
  submitted = false;
  mensaje: string = "";
  error: string = '';
  loading: boolean = false;
  respuesta: Number;
  idSer: String;
  modified: boolean = false;
  id: String = JSON.parse(localStorage.getItem('currentUsuario') as string).id;
  constructor(private servicioService: ServicioService, private rutaActiva: ActivatedRoute) {
    this.rutaActiva.params.subscribe(params => {
      this.idSer = params['id']; // (+) converts string 'id' to a number
    });
  }

  onSubmit(formulario: NgForm) {

    if (formulario.valid) {
      this.mensaje = "";
      this.loading = true;
      this.servicioService.putServicio(this.idSer, this.servicio).subscribe(data => {
        this.servicio = data;
        this.mensaje = "Se actualizo corectamente";
        this.loading = false;
      }, error => {
        this.mensaje = "No se actualizo corectamente";
        console.log(error);
        this.loading = false;
      }

      )
      this.submitted = true;
    }
  }

  ngOnInit() {
    console.log(this.idSer);
    this.servicioService.getService(this.idSer).subscribe(
      data => {
        this.servicio = data;
        console.log("Es el servicio ", this.servicio.nombre);
        this.loading = false;
      }
      ,
      error => {
        this.error = 'No se Obtubieron corectamente los datos del usuario';
        console.error(error);
        this.loading = false;
      }
    )
  }
}
