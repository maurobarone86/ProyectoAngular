import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../_services/servicios.service';
import { AuthenticationService } from '../_services';

import { Usuario } from '../_models/usuario';
import { Servicio } from '../_models/servicio';

@Component({
  selector: 'app-servicios-user',
  templateUrl: './servicios-user.component.html',
  styleUrls: ['./servicios-user.component.css']
})
export class ServiciosUserComponent implements OnInit {
  currentUsuario: Usuario;
  username: String;
  servicios: Servicio[] = [];
  id: String;
  error: String;
  mostrar: Boolean;
  constructor(private servicioService: ServicioService) {
    var datos = JSON.parse(localStorage.getItem('currentUsuario') as string);
    if (datos != null) {
      this.username = datos.username;
      this.id = datos.id;
    } else {
      this.username = "";
      this.id = "";
    };
    this.mostrar = false;
  }

  ngOnInit(): void {
    if (this.id != "") {
      this.servicioService.getPorID(this.id)
        .subscribe(
          data => {
            this.servicios = data;
            if (this.servicios != null) {
              this.mostrar = true;
            }
          },
          error => {
            this.error = 'No se Obtubieron corectamente los servicios';
            console.error(error);
          }
        )
    } else {
      console.log("No se inicializo corectamente el id");
    }
  }

}
