const numeros = Array.from({length: 10}, (_, index) => index + 1);

const numerosMultiplicados = numeros.map(numero => numero * 2);

console.log('Novo array com números multiplicados por 2:');
console.log(numerosMultiplicados)