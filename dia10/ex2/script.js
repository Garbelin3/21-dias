let numeros = [];

for (let i = 0; i <= 4; i++) {
    let numInserido = parseInt(prompt(`Digite o número do índice ${i}:`))
    numeros[i] = numInserido;
}
console.log(numeros)
numeros.reverse()
console.log(numeros)
