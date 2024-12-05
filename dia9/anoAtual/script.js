let idade = parseInt(prompt("Qual a sua idade?"));
let anoAtual = 2024;
let continuar = true;

do {
    let nascimento = anoAtual - idade;
    let idadeAtual = 0;

    alert(`Você nasceu em ${nascimento}`);

    for (let anoVivido = nascimento; anoVivido <= anoAtual; anoVivido++) {
        console.log(`${anoVivido} - ${idadeAtual} anos de idade`);
        idadeAtual++;
    }

    let resposta = prompt("Deseja inserir os dados novamente? (s/n)").toLowerCase();
    if (resposta === "s") {
        idade = parseInt(prompt("Qual a sua idade?")); // Solicita nova idade para reiniciar o processo
    } else {
        continuar = false; // Encerra o loop
    }
} while (continuar);

console.log("Programa encerrado!");
