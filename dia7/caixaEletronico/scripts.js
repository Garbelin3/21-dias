let saldo = 1000; 
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false;

do {
    const nome = prompt("Digite seu nome: ");
    const cpf = prompt("Digite seu CPF: ");
    const valor = Number(prompt("Digite o valor da operação: "));
    const operacao =  prompt("Digite o tipo da operação: saque ou depósito? (S/D)");

    if (valor < 0 ) {
        alert("Operação inválida! Valor inválido.");
    } else if (operacao === "S" && valor > saldo) {
        alert("Operação inválida! Saldo insuficiente.");
    } else if (operacao == "S" || operacao == 's'){
        alert(`Olá ${nome} (${cpf}), seu saldo atual é de R$ ${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        alert(`Saque realizado com sucesso! Seu saldo atual é de R$ ${saldo}.`);
    } else {
        alert(`Olá, ${nome} (${cpf}), seu saldo atual é de R$ ${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        alert(`Depósito realizado com sucesso! Seu saldo atual é de R$ ${saldo}.`);
    }

    const opcao = prompt("Deseja realizar outra operação? (S/N)");
    if (opcao === "S" || opcao === "s") {
        continuar = true;
    } else {
        continuar = false;
        alert(`Obrigado por utilizar nossos serviços!`);
    }
} while (continuar);

alert(`Saldo final: R$ ${saldo}`);
alert(`Maior valor inserido: R$ ${maiorValorInserido}`);
alert(`Média dos valores inseridos: R$ ${somaValoresInseridos / totalTransacoes}`);
