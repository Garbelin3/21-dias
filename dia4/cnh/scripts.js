let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let cnh = prompt("Você possui CNH? (sim/nao)");
let carro = prompt("Você possui carro? (sim/nao)");

if (idade > 18 && cnh === 'sim' && carro === 'sim') {
    console.log( nome + ", você será o motorista.");
} else if (idade > 18 && cnh === 'sim' && carro === 'nao') {
    console.log( nome + ", você pode dirigir mas não tem carro.");
} else {
    console.log( nome + ", você não pode dirigir.");
}