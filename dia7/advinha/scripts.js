const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

do {
    palpite = parseInt(prompt("Escolha um número de 1 a 10:"));

    if (palpite < numeroSecreto){
        alert(`O número secreto é maior que ${palpite}`)
    }
    if (palpite > numeroSecreto){
        alert(`O número secreto é menor que ${palpite}`)
    }
} while (palpite !== numeroSecreto)

    alert(`Parabéns, o número Secreto é ${numeroSecreto}`)