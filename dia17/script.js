class Hotel {
    ID
    Nome
    Categoria
    Endereco
    Telefone
    constructor (id, nome,categoria, endereco, telefone){
        this.ID = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    ID
    IDHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor (id, idHotel, nomeResponsavel, diaEntrada, diaSaida){
        this.ID = id
        this.IDHotel = idHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function CadastrarHotel(){
    let nome = prompt("Digite o nome do Hotel:")
    let categoria = prompt("Digite a Categoria do Hotel:")
    let endereco = prompt("Digite o Endereço do Hotel:")
    let telefone = prompt("Digite o Telefone do Hotel:")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CadastrarReserva(){
    let idHotel
    let existe = false

    do{
        idHotel = parseInt(prompt("DIgite o id do Hotel"))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].ID) {
                i = hoteis.length
                existe = true
            } else if(i == hoteis.length - 1){
                console.log("ID de Hotel não Cadastrado")
            }
        }
    } while (!existe)

    let nome = prompt("Digite o nome do Responsável")
    let diaEntrada = parseInt(prompt("Digite o dia de entrada"))
    let diaSaida
    do {
        diaSaida = parseInt(prompt("Digite o dia de Saída"))
        if(diaSaida < diaEntrada){
            console.log("O dia de Saida deve ser maior que o dia de entrada")
        }
    } while(diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function ProcurarReservasPeloHotel(){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel - 1
            console.log("Hotel:", hoteis[i].Nome)
            console.log("Responsável", reserva.nomeResponsavel)
            console.log("Dia de entrada", reserva.diaEntrada)
            console.log("Dia de Saída", diaSaida)
        }
    })
}

let continuar = true
do {
    let opcao = prompt("Escolha uma opção: \n1-Cadastrar Hotel \n2-Cadastrar Reserva \n3-Procurar Reserva Pelo Hotel \n4-Encerrar")

    switch (opcao){
        case "1":
            CadastrarHotel()
            break;
        case "2":
            CadastrarReserva()
            break;
        case "3":
            ProcurarReservasPeloHotel()
            break;
        case "4":
            console.log("Programa Encerrado!")
            continuar = false
            break;
        default:
            console.log("Opção inválida!")
            break;
    }
} while(continuar)