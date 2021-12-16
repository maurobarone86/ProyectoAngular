import { Component, OnInit } from '@angular/core';
import { Usuario } from '../_models/usuario';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../_services/usuario.service';


@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {  
  usuario = new Usuario();
  submitted = false;
  mensaje: string = "";
  error: string = '';
  loading: boolean = false;
  respuesta: Number;
  
  modified:boolean=false;
  id:String=JSON.parse(localStorage.getItem('currentUsuario') as string).id;
  constructor(private usuarioService:UsuarioService) { }

  onSubmit(formulario: NgForm){
   
    if(formulario.valid) {
      
      this.mensaje= "";
      this.loading = true; 
      this.usuarioService.putUsuarioById(this.id,this.usuario).subscribe(response => { 
        this.respuesta=response.status;
        console.log(this.respuesta)
        if(this.respuesta === 200) {
          this.mensaje = "El usuario fue actualizado correctamente"}
        else {
          this.mensaje = "Ocurrio un error en la actualizacion del usuario"} 
      this.loading = false;
        })
      this.submitted=true;
      }
  }
  
    ngOnInit(){
    this.loading = true;
    console.log(this.id)
    this.usuarioService.getUsuarioById(this.id).subscribe(
      data => {
        this.usuario = data;
        console.log(this.usuario)
        console.log(this.usuario.fechaNac as Date)
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
