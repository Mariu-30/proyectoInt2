export class Experiencia {
    id? : number;
    nombreExp : string;
    descripcionExp : string;
    fechaInicio: string;
    fechaFin: string;
    cargo: string;
    imagen: string;

    constructor(nombreExp: string, descripcionExp: string, fechaInicio: string, fechaFin: string, cargo: string, imagen: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cargo = cargo;
        this.imagen = imagen;
    }
}
