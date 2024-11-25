let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let altura = prompt("Qual é a sua altura?");
let peso = prompt("Qual é o seu peso?");
let nascimento = 2024 - idade;

let imc = peso / (altura * altura);
let imcArredondado = imc.toFixed(2);

alert("Olá, " + nome + "! Você tem " + idade + " anos, " + "nasceu em " + nascimento + ", tem " + altura + " de altura e pesa " + peso + "kg. Seu IMC é " + imcArredondado + ".");