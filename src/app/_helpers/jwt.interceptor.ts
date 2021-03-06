import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // agrego Authorization Header con jwt token si esta disponible
        let currentUsuario = this.authenticationService.currentUsuarioValue;
        if (currentUsuario && currentUsuario.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUsuario.token}`
                }
            });
        }

        return next.handle(request);
    }
}