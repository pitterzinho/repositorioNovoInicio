//VARIÁVEIS

saldo = 20000; // VALOR INICIAL DO CLIENTE
maiorValorInserido = 0;
somaDosValores = 0; //PARA A MÉDIA DOS VALORES
totalTransacoes = 0;
continuar = false;

do{

    let nome = prompt('Digite seu nome ');
    let cpf = Number(prompt("Digite seu número de CPF"));
    let opcao = prompt("Digite a transação que deseja fazer. Para Depósito digite (d) ou para Saque digite (s)");
    let valor = Number(prompt("Digite o valor que deseja realizar a transação escolhida"));

    if(valor <= 0){

        console.log("Valor inválido. A transação não pode ser processada");

    }
    else if(opcao == "s" && valor > saldo){

        console.log("Saldo Insuficiente. A transação não pode ser processada");

    }
    else if(opcao == "s"){

        console.log(nome +", CPF" + cpf + ", seu saldo atual é de R$" + saldo);
        saldo -= valor
        somaDosValores += valor
        totalTransacoes++;

        if(valor > maiorValorInserido){

            maiorValorInserido = valor
       
        }

        console.log("Transação concluída. Seu saldo atual é de R$" + saldo);

    }

    let finalizacao = prompt("Deseja continuar ? Se sim digite 1 ou não digite 2")
    if(finalizacao === "1"){

        continuar = true
    
    }
    else if(finalizacao === "2"){

        continuar = false

    }
    else{

        continuar = false
        console.log("Opção inválida. Programa encerrado")
    }

} 
while(continuar)

console.log("Seu saldo final é de R$" + saldo);
console.log("O maior valor inserido foi de R$" + maiorValorInserido);
console.log("A média dos valores inseridos foi de R$" + somaDosValores / totalTransacoes);