let ok = "n";
let nome;
let idade;
let salario;
do{
    nome = prompt("Digite seu Nome:")
    idade = prompt("Digite sua Idade:")
    salario = parseFloat(prompt("Digite seu salário atual:"))

    alert(`Olá ${nome}, você tem ${idade} anos e seu salário é R$ ${salario} reais. `)
    ok = prompt("Deseja trocar alguma informação? (s/n)")
}while(ok === "s")

let aumento = 0.015

for (let ano = 1; ano <= 10; ano++){
    salario += salario * aumento
    aumento *= 2

    console.log((2024 + ano) + ` - R$ ${salario.toFixed(2)}`)
}

