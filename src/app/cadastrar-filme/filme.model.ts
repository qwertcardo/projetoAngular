import { Autor } from "./autor.model";

export class Filme {
    id: number;
    nome: string;
    genero: string;
    ano: string;
    autor: Autor;
}