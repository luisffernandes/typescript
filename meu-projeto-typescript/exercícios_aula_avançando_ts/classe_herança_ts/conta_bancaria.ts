class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    exibirSaldo(): void {
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
}

class ContaCorrente extends ContaBancaria {
    limiteCredito: number;

    constructor(titular: string, saldo: number, limiteCredito: number) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }

    // Sobrescrevendo o método exibirSaldo
    exibirSaldo(): void {
        const saldoDisponivel = this.saldo + this.limiteCredito;
        console.log(`Saldo atual de ${this.titular} (incluindo limite de crédito): R$${saldoDisponivel.toFixed(2)}`);
    }
}

//Exemplo de uso 
const conta1 = new ContaBancaria("João", 1500);
conta1.exibirSaldo();

const contaCorrente1 = new ContaCorrente("Maria", 2000, 1000);
contaCorrente1.exibirSaldo();
