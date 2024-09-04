/// <reference path="Financeiro.ts" />
import { Cliente } from './Cliente';

export class Pedido {
    cliente: Cliente;
    produto: string;
    valor: number;

    constructor(cliente: Cliente, produto: string, valor: number) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }

    exibirDetalhes(): void {
        console.log(`Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor Total: R$${this.valor.toFixed(2)}`);
    }
}

// Código de exemplo para uso no Pedido.ts
const cliente1 = new Cliente("Lucas", "lucas@example.com");
const pedido1 = new Pedido(cliente1, "Notebook", 3000);
pedido1.exibirDetalhes();