class Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    descricao(): string {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
}

class Gerente extends Funcionario {
    departamento: string;

    constructor(nome: string, cargo: string, salario: number, departamento: string) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }

    descricaoDetalhada(): string {
        return `${this.descricao()} e supervisiona o departamento de ${this.departamento}.`;
    }
}

//Exemplos de uso
const funcionario1 = new Funcionario("Carlos", "Desenvolvedor", 4500);
console.log(funcionario1.descricao());


const gerente1 = new Gerente("Ana", "Gerente de Projetos", 7500, "Tecnologia");
console.log(gerente1.descricaoDetalhada());
