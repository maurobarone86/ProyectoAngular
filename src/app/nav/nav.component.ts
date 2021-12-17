import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';
import { Usuario } from '../_models/usuario';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUsuario: Usuario;
  username: String;
  error: string = '';
  loading: boolean = false;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
    var datos = JSON.parse(localStorage.getItem('currentUsuario') as string);
    if (datos != null) {
      this.username = datos.username;
    } else {
      this.username = "";
    };
    console.log("datos: ", this.currentUsuario);
  }

  ngOnInit() {
    this.loading = true;
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
