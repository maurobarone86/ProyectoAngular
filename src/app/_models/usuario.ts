import { Servicio } from "./servicio";
import { Evento } from "./evento";

export class Usuario {
    nombre: string;
    apellido: string;
    fechaNac: Date;
    direccion: string;
    nombreUsuario: string;
    password: string;
    servicios: Servicio[];
    eventos: Evento[];
    token?: string;
    fechahtml?:String


    constructor(nombre: string = "", apellido: string = "", fechaNac: Date = new Date(), direccion: string = "", nombreUsuario: string = "", password: string = "", servicios: Servicio[] = [], eventos: Evento[] = [], token: string = "") {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.direccion = direccion;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.servicios = servicios;
        this.eventos = eventos;
        this.token = token;


    }
    public getEventos() {
        return this.eventos;
    }
    public getServicios() {
        return this.servicios;
    }
    public getNombre() {
        return this.nombre
    }
    public getApellido() {
        return this.apellido
    }
    public getFechaNac() {
        return this.fechaNac
    }
    public getDireccion() {
        return this.direccion
    }
    public getNombreUsuario() {
        return this.nombreUsuario
    }
    public getPassword() {
        return this.password
    }

    public setNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre
    }
    public setApellido(nuevoApellido: string) {
        this.apellido = nuevoApellido
    }
    public setFechaNac(nuevaFechaNac: Date) {
        this.fechaNac = nuevaFechaNac
    }
    public setDireccion(nuevaDireccion: string) {
        this.direccion = nuevaDireccion
    }
    public setNombreUsuario(nuevoNombreUsuario: string) {
        this.nombreUsuario = nuevoNombreUsuario
    }
    public setPassword(nuevoPassword: string) {
        this.password = nuevoPassword
    }
    public addServicio(nuevoServicio: Servicio) {
        this.servicios.push(nuevoServicio)
    }
    public addEvento(nuevoEvento: Evento) {
        this.eventos.push(nuevoEvento)
    }
}
