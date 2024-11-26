let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));
let operacao = prompt('Digite a operação (+, -, *, /): ');

switch (operacao) {
    case '+':
        alert('Resultado: ' + (num1 + num2));
        break;
    case '-':
        alert('Resultado: ' + (num1 - num2));
        break;
    case '*':
        alert('Resultado: ' + (num1 * num2));
        break;
    case '/':
        alert('Resultado: ' + (num1 / num2));
        break;
}