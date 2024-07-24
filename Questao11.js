let cidades = ['São Paulo','Rio de Janeiro','Belo Horizonte','Salvador','Fortaleza'];
let indiceARemover = [cidades.indexOf('Belo Horizonte'),cidades.indexOf('Salvador')];

indiceARemover.sort((a,b) => b - a);
indiceARemover.forEach(index => {
cidades.splice(index, 1);
});

console.log("Array de cidade após remoção:",cidades);