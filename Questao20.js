const pessoas = [
    { nome: 'Maria', idade: 20 },
    { nome: 'João', idade: 16 },
    { nome: 'Ana', idade: 25 },
    { nome: 'Pedro', idade: 14 },
    { nome: 'Carla', idade: 22 }
];

const primeiraPessoaMaiorDeIdade = pessoas.find(pessoa => pessoa.idade > 18);

console.log('Primeira pessoa com idade maior que 18:');
console.log(primeiraPessoaMaiorDeIdade)