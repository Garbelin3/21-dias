let nome = prompt("Qual o seu nome?")
let idade = parseInt(prompt("Qual a sua idade?"))
let peso = prompt("Qual o seu peso?")
let altura = prompt("Qual a sua altura?")
let profissao = prompt("Qual a sua Profisssão?")

alert(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)

if (idade >= 18) {
    alert("Está liberado para tomar umas geladas")
} else {
    alert("Sem gelada para você")
}

let mes = idade * 12
let semana = idade * 365 / 7
let dia = idade * 365

alert(`Você tem aproximadamente ${mes} meses, ${semana} semanas e ${dia} dias de idade.`)