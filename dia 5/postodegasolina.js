//Variáveis

let opcao = 0
let quantidade = 0
let valorDoCliente = 0

//Entrada de dados
opcao = Number(prompt("Bem Vindo ao posto de gasolina! " + "\nDigite qual dos serviços deseja realizar:" 
+ "\n1 = abastecer com gasolina \n2 = abastecer com álcool \n3 = calibrar os pneus"))

//Saída de dados
switch(opcao){
    case 1:
        valorDoCliente = parseInt(prompt('Digite o valor desejado para abastecer:'))
        quantidade = valorDoCliente / 5
        console.log("Foram abastecidos: " + quantidade + "L de gasolina")
        break;
    case 2:
        valorDoCliente = parseInt(prompt('Digite o valor desejado para abastecer:'))
        quantidade = valorDoCliente / 3
        console.log("Foram abastecidos: " + quantidade + "L de álcool")
        break;
    default:
        console.log("Os pneus foram calibrados com sucesso !")
        break;
}