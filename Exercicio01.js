// 1) Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript:
 
const leia = require('readline-sync');

//Variáveis
 let salario, abono, novo_salario

 //Entrada de dados
 console.log("Digite o salário: ")
 salario = leia.questionFloat()

 console.log("Digite o abono: ")
 abono = leia.questionFloat()

 novo_salario = salario + abono
 
 //Saída de dados
 console.log("O novo salário é: " + novo_salario)
