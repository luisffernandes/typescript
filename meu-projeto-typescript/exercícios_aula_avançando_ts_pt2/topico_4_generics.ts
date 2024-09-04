function encontrarMaiorElemento<T extends number | string>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    return array.reduce((a, b) => (a > b ? a : b));
}

// Exemplo de uso:
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
console.log(maiorNumero);

const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'
console.log(maiorPalavra);