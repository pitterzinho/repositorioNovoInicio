//Variáveis
let valor = 0

//Entrada dos dados
valor = Number(prompt("Digite um valor inteiro e positivo:"))

//Saída dos dados 
for(i = valor; i <= valor + 2; i++) {
console.log("Tabuada do número: " + i)
    for(j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i * j))
    }
}
