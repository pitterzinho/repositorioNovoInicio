//Entrada de dados
let nome = prompt('Insira seu nome:')
let idade = Number(prompt('Insira sua idade:'))
let cartaDeMotorista = prompt('Você possui carteira de motorista ? Digite com sim/não')
let carro = prompt('Você possui carro ? Digite com sim/não')

//Saída de dados

if(idade < 18 || cartaDeMotorista === "não"){
console.log(nome +", você não pode dirigir !")
}else if(idade >= 18 && cartaDeMotorista === "sim" && carro === "não"){
console.log(nome +", você pode dirigir, mas não tem um carro")
}else{
console.log(nome +", você será o motorista !") 
}
