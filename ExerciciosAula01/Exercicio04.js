// 4) Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. Veja os exemplos abaixo:

const leia = require('readline-sync');

let num1, num2, num3, num4, diferenca

//Entrada de dados
console.log("Digite o primeiro número: ")
num1 = leia.questionFloat()

console.log('Digite o segundo número: ')
num2 = leia.questionFloat()

console.log("Digite o terceiro número: ")
num3 = leia.questionFloat()

console.log("Digite o quarto número: ")
num4 = leia.questionFloat()

diferenca = (num1 * num2) - (num3 * num4)

// Saída de dados
console.log("A diferença dos dois primeiros números e dos dois últimos é de: " + diferenca)