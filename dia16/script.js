let nomes = []
let senhas = []

//func para receber solicitação do usuário
function solicitarOpcao() {
    let escolha = prompt("Digite 1-Cadastrar 2-Login 3-Excluir 4-Encerrar")
    return escolha
}

function cadastrarUsuario(){
    nomes.push(prompt("Digite seu nome:"))
    senhas.push(prompt("Digite sua senha:"))
}

function fazerLogin(nome, senha){
    let i = nomes.indexOf(nome)
    if (i !== -1 && senhas[i] == senha){
        return true
    } else{
        return false
    }
}

function excluirCadastro(nome){
    let i = nomes.indexOf(nome)
    if(i !== -1) {
        nomes.splice(i, 1)
        senhas.splice(i, 1)
        console.log("Cadastro excluido com sucesso")
    } else {
        console.log("Usuário não encontrado")
    }
}

let continuar = true

while(continuar){
    let opcao = solicitarOpcao()
    switch (opcao){
        case "1":
            cadastrarUsuario()
            break;
        case "2":
            let nome = prompt("Digite o nome:")
            let senha = prompt("Digite sua senha")
            let login = fazerLogin(nome, senha)
            if (login) {
                console.log("Login realizado com sucesso")
            } else {
                console.log("Nome ou senha incorretos!")
            }
            break;
        case "3":
            nome = prompt("Digite seu nome:")
            excluirCadastro(nome)
            break;
        case "4":
            continuar = false
            break;
        default:
            console.log("Opção inválida. Tente novamente!")
            break;
    }
}