
const produto = {
    nome: "Produto A",
    preco: 50.0, 
    quantidade: 20 
};


const valorTotalEstoque = produto.preco * produto.quantidade;


console.log(`Valor total do estoque: R$${valorTotalEstoque.toFixed(2)}`);
