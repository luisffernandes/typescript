interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function comprarProduto(produto: Produto, pagamento: FormaPagamento): string {
    return `Você comprou o produto ${produto.nome} na categoria ${produto.categoria} pelo preço de R$${produto.preco.toFixed(2)}, usando ${pagamento} como forma de pagamento.`;
}

//exemplo de uso
const produtoExemplo: Produto = { nome: "Notebook", preco: 3500.00, categoria: "Eletrônicos" };
const produto_msg = comprarProduto(produtoExemplo, 'cartão');
console.log(produto_msg);