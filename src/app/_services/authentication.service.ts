import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { User } from '../_models';
import { Usuario } from '../_models/usuario';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    //private currentUserSubject: BehaviorSubject<User>;
    private currentUsuarioSubject: BehaviorSubject<Usuario>;
    //public currentUser: Observable<User>;
    public currentUsuario: Observable<Usuario>;

    /*
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
        this.currentUser = this.currentUserSubject.asObservable();
    }*/
    constructor(private http: HttpClient) {
        this.currentUsuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUsuario') as string));
        this.currentUsuario = this.currentUsuarioSubject.asObservable();
    }
/*
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }*/
    public get currentUsuarioValue(): Usuario {
        return this.currentUsuarioSubject.value;
    }
/*
    login(username: string, password: string) {
        return this.http.post<any>(`${env.url}/auth`, { username, password })
            .pipe(map(credentials => {
                // login successful si hay un token en la respuesta
                if (credentials && credentials.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(credentials));
                    this.currentUserSubject.next(credentials);
                }

                return credentials;
            }));
    }*/
    login(nombreUsuario: string, password: string) {
        return this.http.post<any>(`${env.url}/auth`, { nombreUsuario, password })
            .pipe(map(credentials => {
                // login successful si hay un token en la respuesta
                if (credentials && credentials.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUsuario', JSON.stringify(credentials));
                    this.currentUsuarioSubject.next(credentials);
                }

                return credentials;
            }));
    }
/*
    logout() {
        // elimino las credenciales del localstorage al deslogearme
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null as any);
    }*/
    logout() {
        // elimino las credenciales del localstorage al deslogearme
        localStorage.removeItem('currentUsuario');
        this.currentUsuarioSubject.next(null as any);
    }
}