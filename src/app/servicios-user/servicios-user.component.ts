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
  mensaje: string = "";
  respuesta: Number;
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
    console.log(this.id)
  }

  actualizar() {

    this.mensaje = "";
    if (this.id != "") {
      this.servicioService.getPorID(this.id)
        .subscribe(
          data => {
            this.servicios = data;
            console.log(this.servicios)
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

  ngOnInit(): void {
    this.actualizar()
  }
  borrar(id: Number | undefined) {
    console.log("se solicito el borrado del servicio id :" + id)
    var valor = confirm("Esta seguro que desea eliminarlo?");
    if (id != undefined && valor) {
      this.servicioService.delServicioById(id).subscribe(
        response => {
          this.respuesta = response.status;
          console.log(this.respuesta)
          if (this.respuesta === 200) {
            this.mensaje = "El servicio se borro correctamente"
            this.actualizar();
          }
          else {
            this.mensaje = "Ocurrio un error en el borrado del servicio"
          }


        },
        error => {
          this.error = 'No se borro correctamente el servicio';
          console.error(error);
        }
      )

    }
  }


}
