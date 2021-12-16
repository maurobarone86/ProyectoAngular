import { Component, OnInit } from '@angular/core';
import { Usuario } from '../_models/usuario';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../_services/usuario.service';
import { Servicio } from '../_models/servicio';
import { ServicioService } from '../_services/servicios.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  servicio =new Servicio();
  usuario = new Usuario();
  submitted = false;
  mensaje: string = "";
  error: string = '';
  loading: boolean = false;
  respuesta: Number;
  
  modified:boolean=false;
  id:String=JSON.parse(localStorage.getItem('currentUsuario') as string).id;
  constructor(private servicioService:ServicioService) { }

  onSubmit(formulario: NgForm){
   
    if(formulario.valid) {
      
      this.mensaje= "";
      this.loading = true; 
      this.servicioService.postServicioById(this.id,this.servicio).subscribe(response => { 
        this.respuesta=response.status;
        console.log(this.respuesta)
        if(this.respuesta === 200) {
          this.mensaje = "El servicio fue cargado correctamente"}
        else {
          this.mensaje = "El nombre del servicio ya existe elija otro por favor"} 
      this.loading = false;
        })
      this.submitted=true;
      }
  }
  
    ngOnInit(){
      
  }

}
