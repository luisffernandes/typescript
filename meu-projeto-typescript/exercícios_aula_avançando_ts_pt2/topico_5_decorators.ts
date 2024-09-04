function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        console.log(`Tempo de execução de ${propertyKey}: ${(fim - inicio).toFixed(2)}ms`);
        return resultado;
    };

    return descriptor;
}

class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);