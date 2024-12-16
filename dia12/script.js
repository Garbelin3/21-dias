//Passo 1: criar 2 arrays para nome e senha
let nomes = []
let senhas = []
let cont = 0

let continuar = true

while(continuar){
    //Passo 2 e 3: Qual operação deseja realizar e organizando switch com while
    let escolha = prompt("Digite 1-Cadastrar/2-Login/3-Excluir/4-Encerrar")
    switch (escolha) {
        case '1':
            nomes[cont] = prompt("Digite seu usuário:")
            senhas[cont] = prompt("Digite sua nova senha:")
            cont++
            break;

        case '2':
            let nome = prompt("Digite seu usuário:")
            let senha = prompt("Qual sua senha:")
            let loginValido = false

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    loginValido = true
                }
            }

            if (loginValido) {
                alert("Login realizado com sucesso!")
            } else {
                alert("Login ou senha incorretos!")
            }
            break;

        case '3':
            let nomeExcluir = prompt("Qual o nome que deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    alert("Cadastro excluido com sucesso!")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--
            
            break;

        case '4':
            continuar = false
            break;

        default:
            console.log("Opção inválida, escolha novamente!")
            break;
        
    }
}
