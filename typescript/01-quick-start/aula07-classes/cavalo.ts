import { animal } from "./animal";

export class cavalo extends animal {
    constructor(nome: string) {
        super(nome);
    }

    public mover(distanciaEmMetros: number): void {
        console.log('Galopando...');
        super.mover(distanciaEmMetros);
    }
}