const readline = require('readline').cleateInterface({
    input: process.stdin,
    output: process.stdout
});

let filmes =[];

readline.question('Digite o nome do 1° filme:', (filme1) => {
    filmes.push(filme1);
readline.question('Digite o nome do 2° filme:', (filme2) =>{
    filmes.push(filme2);
readline.question('Digite o nome do 3° filme:', (filme3)=>{
    filmes.push(filme3);
readline.question('Digite o nome do 4° filme:', (filme4)=>{
readline.question('Digite o nome do 5° filme:', (filme5)=>{
    filmes.push(filme5)

    console.log("Filmes informados1:")
    console.log(filmes);

    readline.close();
});
});
});
});
});
