let opcao = prompt("Escolha uma opção: 1 - gasolina, 2 - álcool, 3 - calibrar pneus");
let tanque = 0;
let total = 0;
switch(opcao){
    case "1":
        tanque = Number(prompt("Digite a quantidade de combustível no tanque"));
        total = tanque * 5;
        alert("Gasolina selecionado, tanque cheio e o valor foi de: R$ " + total);
        break;
    case "2":
        tanque = Number(prompt("Digite a quantidade de combustível no tanque"));
        total = tanque * 3;
        alert("Álcool selecionado, tanque cheio e o valor foi de: R$ " + total);
        break;
    case "3":
        alert("Pneus calibrados");
        break;
}