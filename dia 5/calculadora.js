// Criando as variáveis
let numberUm = 0
let numberDois = 0
let opcao = 0

//Entrada dos dados
numberUm = Number(prompt('Digite o primeiro número:'))
opcao = Number(prompt("Escolha o número da operação que deseja realizar:" + "\n1 = + \n2 = - \n3 = * \n4 = /"))
numberDois = Number(prompt('Digite o segundo número:'))

//Operações
let soma = 0
soma = numberUm + numberDois

let subtracao = 0
subtracao = numberUm - numberDois

let multiplicacao = 0
multiplicacao = numberUm * numberDois

let divisao = 0
divisao = numberUm / numberDois

// Saída dos dados
switch(opcao){
    case 1:
        console.log(numberUm + " + " + numberDois + " = " + soma)
        break;
    case 2:
        console.log(numberUm + " - " + numberDois + " = " + subtracao)
        break;
    case 3:
        console.log(numberUm + " x " + numberDois + " = " + multiplicacao)
        break;
    default:
        console.log(numberUm + " / " + numberDois + " = " + divisao)
        break;
}