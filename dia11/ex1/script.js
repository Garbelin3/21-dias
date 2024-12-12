let continuar = true;
let alunos = [];
let notas = [];
let contador = 0;
do {
    let nome = prompt(`Digite o nome do ${contador + 1}° aluno:`) //contador++?
    let nota = prompt(`Digite a nota do aluno`)
    alunos[contador] = nome
    notas[contador] = nota
    contador++ // --
    let resposta = prompt(`Deseja adicionar outro nome? (s/n)`)
    if (resposta === 'n') {
        continuar = false;
        alert("Obrigado!")
    }


} while (continuar)