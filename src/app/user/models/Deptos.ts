export class Deptos {
    id: number;
    descrip: string;

    constructor() { }
    buildDepto(descrip: string): Deptos {
        const depto = new Deptos();
        depto.descrip = descrip;
        return depto;

    }
}


