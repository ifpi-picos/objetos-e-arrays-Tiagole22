const carros = [
    { nome: 'Carro A', ano: 2008 },
    { nome: 'Carro B', ano: 2012 },
    { nome: 'Carro C', ano: 2005 },
    { nome: 'Carro D', ano: 2015 },
    { nome: 'Carro E', ano: 2009 }
];

const carrosFabricadosApos2010 = carros.filter(carro => carro.ano > 2010);

console.log('Carros fabricados após 2010:');
console.log(carrosFabricadosApos2010);