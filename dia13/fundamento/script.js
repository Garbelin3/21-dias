class Aluno{
    nome
    idade
    areaAtuacao
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(`Olá, meu nome é: ${this.nome}, tenho ${this.idade} anos e sou ${this.areaAtuacao}`)
    }
}
console.log("===== Cadastro de Alunos =====")

let alunos = []
let continuar = true
let indexAluno = 0

while(continuar){
    let nome = prompt("Digite um nome:")
    let idade = parseInt(prompt("Digite um idade:"))
    let aluno = new Aluno(nome, idade)
    
    let areaAtuacao = prompt("Insira a área de atuação:")
    aluno.areaAtuacao = areaAtuacao

    alunos[indexAluno] = aluno

    let resp = prompt("Deseja continuar? (s/n)")
    if (resp != 's') {
        continuar = false
    }else {
        indexAluno++
    }

}

console.log(alunos)