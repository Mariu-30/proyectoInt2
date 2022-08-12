export class Proyectos {
    id: number;
    nombreProy: string;
    descripcionProy: string;
    imgProy: string;
    urlProy: string;

    constructor(nombreProy: string, descripcionProy: string, imgProy: string, urlProy: string) {
        this.nombreProy = nombreProy;
        this.descripcionProy = descripcionProy;
        this.imgProy = imgProy;
        this.urlProy = urlProy;

    }
}

