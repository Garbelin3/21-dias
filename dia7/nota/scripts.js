// - A média geral dos alunos
//- Quantos homens enviaram as notas
//- Quantas mulheres tiveram nota acima de 7
//- Qual a maior nota entre os homens
//*Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de alunos!

let mediaGeral = 0;
let qtdHomens = 0;
let qtdMulheresAcimaDe7 = 0;
let maiorNotaHomens = 0;
let contador = 1;

while (contador <= 10) {
    nota = parseInt(prompt("Digite a nota do " + contador + "° aluno: "));
    sexo = prompt("Digite o sexo do " + contador + "° aluno (m/f): ");
    
    if (sexo == "m"){
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota;
        }
        qtdHomens++;
    }
    
    if (sexo == "f" && nota > 7){
            qtdMulheresAcimaDe7++;
        }

    mediaGeral += nota;
    contador++;
    
}

mediaGeral = mediaGeral / 10;

alert("A média geral dos alunos é: " + mediaGeral);
alert("A quantidade de homens é: " + qtdHomens);
alert("A quantidade de mulheres com nota acima de 7 é: " + qtdMulheresAcimaDe7);
alert("A maior nota entre os homens é: " + maiorNotaHomens);