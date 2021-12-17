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
  fechaAnt:Number | unknown;
  fechaNueva:Number | unknown;
  
  modified:boolean=false;
  id:String=JSON.parse(localStorage.getItem('currentUsuario') as string).id;
  constructor(private usuarioService:UsuarioService) { }

  onSubmit(formulario: NgForm){
   
    if(formulario.valid) {
      
      this.mensaje= "";
      this.loading = true; 
      
      //console.log(this.usuario.fechaNac )
      this.fechaNueva = this.usuario.fechaNac
      if (this.fechaNueva != this.fechaAnt){
        this.usuario.fechaNac=new Date(this.usuario.fechaNac)
      this.usuario.fechaNac.setDate(this.usuario.fechaNac.getDate() +1)
      }
      

      this.usuarioService.putUsuarioById(this.id,this.usuario).subscribe(response => { 
        this.respuesta=response.status;
        console.log(this.respuesta)
        if(this.respuesta === 200) {
          this.mensaje = "El usuario fue actualizado correctamente"
          var fecha=new Date(this.usuario.fechaNac)
        //this.usuario.fechahtml= (fecha.getUTCFullYear()+"/"+fecha.getMonth()+"/"+fecha.getDate()) ;
        this.usuario.fechahtml= (fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getUTCFullYear()) ;
      }
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
        this.fechaAnt = this.usuario.fechaNac
        var fecha=new Date(this.usuario.fechaNac)
        //this.usuario.fechahtml= (fecha.getUTCFullYear()+"/"+fecha.getMonth()+"/"+fecha.getDate()) ;
        this.usuario.fechahtml= (fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getUTCFullYear()) ;
        console.log(this.usuario.fechahtml)
        
        //console.log(this.usuario.fechaNac)
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
