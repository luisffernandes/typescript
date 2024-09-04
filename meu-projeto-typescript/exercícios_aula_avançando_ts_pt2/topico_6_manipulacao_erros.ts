class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError("Email inválido: falta o caractere '@'.");
    }
    console.log("Email válido.");
}

// Exemplo de uso:
try {
    verificarEmail('usuario.com');
} catch (error) {
    console.error(error.message);  // Deve imprimir "Email inválido: falta o caractere '@'."
}

try {
    verificarEmail('usuario@dominio.com');
    // Saída: "Email válido."
} catch (error) {
    console.error(error.message);
}