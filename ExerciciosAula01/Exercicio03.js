// 3) Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo:

const leia = require('readline-sync');

// Variáveis
let salario_bruto, adicional_noturno, horas_extras, descontos, salario_liquido

// Entrada de dados
console.log("Digite o salário bruto: ")
salario_bruto = leia.questionFloat()

console.log("Digite o adicional noturno: ")
adicional_noturno = leia.questionFloat()

console.log("Digite as horas extras: ")
horas_extras = leia.questionFloat()

console.log("Digite os descontos: ")
descontos = leia.questionFloat()

salario_liquido = salario_bruto + adicional_noturno + (horas_extras * 5) - descontos

//Saída de dados
console.log("O salário liquido é: " + salario_liquido)
