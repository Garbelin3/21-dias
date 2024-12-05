let peso = parseInt(prompt("Qual seu peso?"))
let altura = parseFloat(prompt("Qual sua altura? ex:1.91"))
let imc = peso / (altura * altura)
let idade = parseInt(prompt("Qual a sua idade?"))
let nascimento = 2024 - idade

if (imc < 18.5) {
    alert(`Seu IMC é ${imc.toFixed(2)} e é classificado com Magreza`)
} else if (imc == 18.5 && imc < 24.9) {
    alert(`Seu IMC é ${imc.toFixed(2)} e é classificado com Normal`)
} else if (imc == 24.9 && imc < 30) {
    alert(`Seu IMC é ${imc.toFixed(2)} e é classificado com Sobrepeso`)
} else {
    alert(`Seu IMC é ${imc.toFixed(2)} e é classificado com Obesidade`)
}

alert(`Você tem ${idade} anos e nasceu em ${nascimento}`)