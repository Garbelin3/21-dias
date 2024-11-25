let fome = prompt("Você está com fome? (sim/nao)");
let dinheiro = prompt("Você tem dinheiro? (sim/nao)");
let restaurante = prompt("Seu restaurante favorito está aberto? (sim/nao)");

if (fome === 'nao' || dinheiro === 'nao') {
  console.log("Hoje a Janta será em casa!");
} else if (fome === 'sim' && restaurante === 'sim') {
  console.log("Hoje o jantar vai ser no seu restaurante favorito!");
} else {
    console.log("Peça um delivery!");
}