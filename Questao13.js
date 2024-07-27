const readline = require('readline');

// Configurar o readline para entrada de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const filmes = [];
let contador = 0;

function pedirFilme() {
    if (contador < 5) {
        rl.question(`Digite o nome do filme ${contador + 1}: `, (filme) => {
            filmes.push(filme);
            contador++;
            pedirFilme();
        });
    } else {
        rl.close();
        exibirFilmes();
    }
}

function exibirFilmes() {
    console.log("\nOs filmes informados são:");
    filmes.forEach((filme, index) => {
        console.log(`${index + 1}: ${filme}`);
    });
}

// Iniciar o processo
pedirFilme();
