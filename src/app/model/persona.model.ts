export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    acerca: string;

    constructor(nombre: string, apellido: string, img: string, acerca: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.acerca = acerca;
    }
}