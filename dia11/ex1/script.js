let continuar = true;
let alunos = [];
let notas = [];
let contador = 0;
while (continuar){
    let nome = prompt(`Digite o nome do ${contador + 1}° aluno:`) //contador++?
    let nota = parseInt(prompt(`Digite a nota do aluno`))
    alunos[contador] = nome
    notas[contador] = nota
    contador++ // --
    let resposta = prompt(`Deseja adicionar outro nome? (s/n)`)
    if (resposta === 'n') {
        continuar = false;
        alert("Obrigado!")
    }
}

console.log("As notas dos alunos:")
for (let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + " - " + notas[i])
}

let soma = 0
for (let i = 0; i < notas.length; i++){
    soma += notas[i]
}

let media = soma / alunos.length
console.log("A soma das notas foi de: " + soma)
console.log("A média geral da turma foi: " + media.toFixed(2))
