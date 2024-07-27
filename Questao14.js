const readline = require('readline');

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
    for (let i = 0; i < filmes.length; i++) {
        console.log(`${i + 1}: ${filmes[i]}`);
    }
}

pedirFilme();
