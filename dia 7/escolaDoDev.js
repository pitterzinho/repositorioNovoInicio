// CRIANDO VARÁVEIS
maiorNotaMasculina = 0
notaFemininaAcima7 = 0
mediaGeral = 0
qtdAlunosMasculinos = 0
contador = 1

// ENTRADA DOS CÓDIGOS
while(contador <= 10){ //nota,sexo nesse looping
    sexo = prompt("Insira o seu sexo do aluno: Masculino (m) ou Feminino (f)")
    nota = Number(prompt("Digite de 0 a 10, a nota do " + contador + "º aluno"))

    if(sexo = "m"){

        if(nota > maiorNotaMasculina){
         nota = maiorNotaMasculina   
        }
        qtdAlunosMasculinos++
    }
    if(sexo = "f" && nota > 7){
    notaFemininaAcima7++
    }

    mediaGeral += nota //operador de atribuição composta que realiza duas operações ao mesmo tempo: adição e atribuição
    contador++

}

mediaGeral = mediaGeral / 20

// SAÍDA DOS CÓDIGOS
console.log("A média geral dos alunos foi : " + mediaGeral )
console.log("Os alunos do sexo Masculino (m) que enviaram as notas foi(ram): " + qtdAlunosMasculinos)
console.log("As alunas do sexo Feminino (f) que enviaram as notas foi(ram): " + notaFemininaAcima7)
console.log("A maior nota entre os alunos do sexo Masculino (m): " + maiorNotaMasculina)

//Incremento do Contador(variável x++): A linha "contador++", dentro do loop, é crucial. Ela garante que, 
//a cada iteração, o valor do contador seja incrementado em 1. Isso é importante porque sem o incremento, 
//o valor do contador nunca mudaria e o loop poderia continuar indefinidamente 
//(criando um loop infinito) ou não executar o número esperado de vezes.