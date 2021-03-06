import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegistroComponent } from './registro/registro.component';
import { ServiciosUserComponent } from './servicios-user/servicios-user.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { EditServicioComponent } from './edit-servicio/edit-servicio.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegistroComponent,
        ServiciosUserComponent,
        EditPerfilComponent,
        EditServicioComponent,
        DetalleServicioComponent,
        CreateServiceComponent,
        NavComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }