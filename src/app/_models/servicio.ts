export class Servicio {
    id?:Number;
    nombre: String;
    descripcion: string;
    url: string;
    whatsapp: Number;
    instagram: string;
    twiter: string;


    constructor(nombre: String = "", descripcion: string = "", url: string = "", whatsapp: Number = 0, instagram: string = "", twiter: string = "") {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url = url;
        this.whatsapp = whatsapp;
        this.instagram = instagram;
        this.twiter = twiter;

    }
}
