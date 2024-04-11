// Entrada dos dados
let perguntaUm = prompt('Você está com fome ? Responda com sim/não')
let perguntaDois = prompt('Você tem dinheiro ? Responda com sim/não')
let perguntaTres = prompt('O restaurante está aberto ? Responda com sim/não')

// Saída dos dados
if(perguntaUm === "não" || perguntaDois === "não"){
console.log('Hoje o jantar será em casa');
}else if(perguntaUm === "sim" && perguntaDois === "sim" && perguntaTres === "não"){
   console.log('Peça um delivery');
}else{
    console.log('Hoje o jantar será no seu restaurante preferido');
}