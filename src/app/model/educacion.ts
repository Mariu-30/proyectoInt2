export class Educacion {
    id: number;
    titulo: string;
    nombreInst: string;
    fechaFin: string;
    esEstudioActual: string;
    imagen: string;

    constructor(titulo: string, nombreInst: string, fechaFin: string, esEstudioActual: string, imagen: string) {
        this.titulo = titulo;
        this.nombreInst = nombreInst;
        this.fechaFin = fechaFin;
        this.esEstudioActual = esEstudioActual;
        this.imagen = imagen;
    }
}
