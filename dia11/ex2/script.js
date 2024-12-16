let modelos = []
let anos = []
let valores = []
let contador = 0
let continuar = true;

while(continuar){
    let modelo = prompt("Digite o modelo do carro:")
    modelos[contador] = modelo
    let ano = prompt("Digite o ano do carro:")
    anos[contador] = ano
    let valor = parseInt(prompt("Digite o valor do carro: "))
    valores[contador] = valor
    contador++

    let resposta = prompt("Digite se deseja continuar: (s/n)")
    if (resposta == 'n') {
        continuar = false
    }
}
console.log("Carros cadastrados:")
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}