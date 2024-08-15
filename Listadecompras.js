const { LocalStorage } = require ('node-localstorage');

const localStorage = new LocalStorage('./scratch');

let itens = carregarItens();

function adicionarItem(nome) {
    const novoItem = { nome, comprado: false };
    itens.push(novoItem);
    salvarItens();
} 

function removerItem(index) {
    if (index >= 0 && index < itens.length) {
        itens.splice(index, 1);
        salvarItens();
    }
}

function marcarComoComprado(index) {
    if (index >= 0 && index < itens.length) {
        itens[index].comprado = true;
        salvarItens();
    }
}

function listarItens() {
    itens.forEach((item, index) => {
        const status = item.comprado ? '✔️' : '❌';
        console.log(`${index + 1}. ${item.nome} - Status: ${status}`);
    });
}

function salvarItens() {
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

function carregarItens() {
    const itensSalvos = localStorage.getItem('listaCompras');
    return itensSalvos ? JSON.parse(itensSalvos) : [];
}

// Testando as funções
adicionarItem('Leite');
adicionarItem('Pão');
adicionarItem('Arroz');
adicionarItem('Feijão');
adicionarItem('Açúcar');
adicionarItem('Café');
marcarComoComprado(0); 
listarItens();
