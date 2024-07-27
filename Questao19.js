const frutas = ['banana', 'maçã', 'laranja', 'uva', 'morango'];

const maçaPresente = frutas.includes('maçã');

if (maçaPresente) {
    console.log('A fruta "maçã" está presente no array de frutas!');
} else {
    console.log('A fruta "maçã" não está presente no array de frutas.');
}