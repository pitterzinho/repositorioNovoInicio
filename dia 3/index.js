// Mapeando as informações
let nome = ''
let idade = 0
let altura = 0
let peso = 0

// Apresentando ao Usuário a coleta de informação 
nome = prompt("Digite seu nome completo: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

// Calculando o ano de nascimento e IMC
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

//Apresentação 
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + " kg e seu IMC é " + imc + "kg/m2")






