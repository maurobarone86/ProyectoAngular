import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { RegistroComponent } from './registro/registro.component';
import { ServiciosUserComponent } from './servicios-user/servicios-user.component'
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { EditServicioComponent } from './edit-servicio/edit-servicio.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { CreateServiceComponent } from './create-service/create-service.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'edit-perfil.component',
        component: EditPerfilComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-servicio.component/:id',
        component: EditServicioComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'detalle-servicio.component/:id',
        component: DetalleServicioComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'create-service.component',
        component: CreateServiceComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'registro.component',
        component: RegistroComponent
    },

    {
        path: 'misServicios',
        component: ServiciosUserComponent,
        canActivate: [AuthGuard]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });