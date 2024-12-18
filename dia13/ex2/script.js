class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }
    CalcularTempo(){
        let distancia = 3000
        let resultado = distancia/(this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
}

class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor
    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }
    definirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempo(this.Distancia)
        let vencedor = this.Participantes[0]
        
        for (let i = 1; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].CalcularTempo(this.Distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes.i
            }
        }
        return this.Vencedor = vencedor
    }

    exibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.nome)
    }
}

let corrida = new Corrida("Monza", "Fórmula 1", 60000)
corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Pegeout 206", 300, 260, 10)

corrida.definirVencedor()
corrida.exibirVencedor()