const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');

let filmes = carregarFilmes();

function adicionarFilme(nome) {
    const novoFilme = { nome, assistido: false };
    filmes.push(novoFilme);
    salvarFilmes();
} 

function removerFilme(index) {
    if (index >= 0 && index < filmes.length) {
        filmes.splice(index, 1);
        salvarFilmes();
    }
}

function marcarComoAssistido(index) {
    if (index >= 0 && index < filmes.length) {
        filmes[index].assistido = true;
        salvarFilmes();
    }
}

function listarFilmes() {
    filmes.forEach((filme, index) => {
        const status = filme.assistido ? '✔️' : '❌';
        console.log(`${index + 1}. ${filme.nome} - Status: ${status}`);
    });
}

function salvarFilmes() {
    localStorage.setItem('listaFilmes', JSON.stringify(filmes));
}

function carregarFilmes() {
    const filmesSalvos = localStorage.getItem('listaFilmes');
    return filmesSalvos ? JSON.parse(filmesSalvos) : [];
}

// Testando as funções
adicionarFilme('O Poderoso Chefão');
adicionarFilme('Pulp Fiction');
adicionarFilme('Clube da Luta');
adicionarFilme('Forrest Gump');
adicionarFilme('Matrix');
adicionarFilme('O Senhor dos Anéis: A Sociedade do Anel');
adicionarFilme('O Cavaleiro das Trevas');
adicionarFilme('Gladiador');
adicionarFilme('Titanic');
adicionarFilme('Star Wars: O Império Contra-Ataca');
marcarComoAssistido(6); 
listarFilmes();

