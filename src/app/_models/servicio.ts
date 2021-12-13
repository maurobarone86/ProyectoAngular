export class Servicio {
    private nombre:string;
    private descripcion:string;
    private url:string;
    private whatsapp:string;
    private instagram:string;
    private twiter:string;


    constructor(nombre:string="",descripcion:string="",url:string="",whatsapp:string="",instagram:string="",twiter:string=""){
        this.nombre = nombre;
		this.descripcion = descripcion;
		this.url = url;
		this.whatsapp = whatsapp;
		this.instagram = instagram;
		this.twiter = twiter;

    }
    public getNombre(){
        return this.nombre
    }
	public getDescripcion(){
        return this.descripcion
    }
    public getUrl(){
        return this.url
    }
    public getWhatsapp(){
        return this.whatsapp
    }
    public getInstagram(){
        return this.instagram
    }
    public getTwiter(){
        return this.twiter
    }	

    public setNombre(nuevoNombre:string){
        this.nombre = nuevoNombre
    }
	public setDescripcion(nuevoDescripcion:string){
        this.descripcion = nuevoDescripcion
    }
    public setUrl(nuevoUrl:string){
        this.url = nuevoUrl
    }
    public setWhatsapp(nuevoWhatsapp:string){
        this.whatsapp = nuevoWhatsapp
    }
    public setInstagram(nuevoInstagram:string){
        this.instagram = nuevoInstagram
    }
    public setTwiter(nuevoTwiter:string){
        this.twiter = nuevoTwiter
    }	
}
