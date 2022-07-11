"use strict"


// CALLBACKS
// Funciones que se pasan como argumento de otras funciones para usarlas dentro de éstas


function sumar(numA, numB){
  return numA + numB
}



function restar(numA, numB){
  return numA- numB
}



function multiplicar(numA, numB){
  return numA*numB
}

console.log(multiplicar(4, 5))


function calcular(operacion, numA, numB){

  return operacion(numA, numB)
}

console.log(calcular(multiplicar, 4, 5))

console.log(sumar)

console.log(calcular(sumar, 3, 8))


function calcular4_5(operacion){
  return operacion(4, 5)
}

console.log(calcular4_5(multiplicar))
console.log(calcular4_5(sumar))
console.log(calcular4_5(restar))


function test(string, string2, string3){
  console.log(string + string2 + string3)
}

calcular(test, 4, 5 ) // Los argumentos no cuadran con el callback -> mal

