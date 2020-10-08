import { Component } from '@angular/core'

@Component(
    {
        selector: 'autor',
        template: `
                    <h2> Autor </h2>
                    <label> Nome: {{nomeAutor}} </label>
                    <br/>
                    <label> Data de Nascimento: {{dataNascimento}}</label>
                `
    }
)

export class AutorComponent {
    nomeAutor: string;
    dataNascimento: string;

    constructor() {
        this.nomeAutor = 'Teste'
        this.dataNascimento = 'Teste'
    }
}