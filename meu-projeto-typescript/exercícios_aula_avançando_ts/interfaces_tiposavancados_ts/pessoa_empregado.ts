type Pessoa = {
    nome: string;
    idade: number;
};

type Empregado = {
    empresa: string;
    salario: number;
};

type PessoaEmpregada = Pessoa & Empregado;

function descreverPessoaEmpregada(pessoaEmpregada: PessoaEmpregada): string {
    return `${pessoaEmpregada.nome} tem ${pessoaEmpregada.idade} anos, trabalha na empresa ${pessoaEmpregada.empresa} e recebe um salário de R$${pessoaEmpregada.salario.toFixed(2)}.`;
}

//exemplo de uso
const empregadoExemplo: PessoaEmpregada = {nome: "Ana", idade: 28, empresa: "Tech Solutions", salario: 5500.00 };
const descricao = descreverPessoaEmpregada(empregadoExemplo);
console.log(descricao);