// 2) Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. Veja o exemplo abaixo:

const leia = require('readline-sync');

//Variáveis
let nota1, nota2, nota3, nota4, media

//Entrada de dados
console.log("Digite a nota 1: ")
nota1 = leia.questionFloat()

console.log("Digite a nota 2: ")
nota2 = leia.questionFloat()

console.log("Digite a nota 3: ")
nota3 = leia.questionFloat()

console.log("Digite a nota 4: ")
nota4 = leia.questionFloat()

media = (nota1 + nota2 + nota3 + nota4) / 4

//Saída de dados
console.log("A média final é: " + media)