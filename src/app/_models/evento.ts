
export class Evento {
    private nombre:string;
    private direccion:string;
    private codigoPostal:string;
    private provincia:string;
    private geolocalizacion:string;
    private fechaHora:Date;
    

    constructor(nombre:string="", direccion:string="", codigoPostal:string="", provincia:string="", geolocalizacion:string="", fechaHora:Date= new Date()){
        this.nombre = nombre;
		this.direccion = direccion;
		this.codigoPostal = codigoPostal;
		this.provincia = provincia;
		this.geolocalizacion = geolocalizacion;
		this.fechaHora = fechaHora;
		
    }

    public getNombre(){
        return this.nombre
    }
    public getDireccion(){
        return this.direccion
    }
    public getCodigoPostal(){
        return this.codigoPostal
    }
    public getProvincia(){
        return this.provincia
    }
    public getGeolocalizacion(){
        return this.geolocalizacion
    }
    public getFechaHora(){
        return this.fechaHora
    }
    
        
    public setNombre(nuevoNombre:string){
        this.nombre =nuevoNombre
    }
    public setDireccion(nuevaDireccion:string){
        this.direccion = nuevaDireccion
    }
    public setCodigoPostal(nuevoCodigoPostal:string){
        this.codigoPostal = nuevoCodigoPostal
    }
    public setProvincia(nuevaProvincia:string){
        this.provincia = nuevaProvincia
    }
    public setGeolocalizacion(nuevaGeolocalizacion:string){
        this.geolocalizacion = nuevaGeolocalizacion
    }
    public setFecha(nuevaFechaHora:Date){
        this.fechaHora = nuevaFechaHora
    }
    
}
