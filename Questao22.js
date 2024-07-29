function imprimirPrimeiroUltimoNome(nomeCompleto){
    const nomes = nomeCompleto.split(" ");
    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];

    console.log("Primeiro nome:", primeiroNome);
    console.log("Último nome:", ultimoNome);
}

imprimirPrimeiroUltimoNome("Tiago Rodrigues Leal");