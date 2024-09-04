async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;  // Simula sucesso ou falha
            if (sucesso) {
                resolve("Dados recebidos da API");
            } else {
                reject(new Error("Erro ao buscar dados da API"));
            }
        }, 2000);  // Simula 2 segundos de espera
    });
}

// Exemplo de uso:
async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);  // "Dados recebidos da API"
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
    }
}

executarBusca();