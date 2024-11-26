let numero = Number(prompt("Digite um número: "));

console.log("Tabuada do " + numero);

for (let i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}

console.log("Tabuada do " + (numero += 1));

for (let i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}

console.log("Tabuada do " + (numero += 1));

for (let i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}