"use strict"

// ARROW FUNCTIONS
// Una sintaxis más sencilla para declarar funciones
// Son funciones ANÓNIMAS: si las queremos volver a usar, debemos guardarlas en una variable

/* (parametro1, parametro2...) => resultado //return implicito, no puede ejecutar varias lineas */

/* () => resultado //aunque no haya parámetros, tienen que estar los paréntesis */

/* () => {
  //código
  return resultado
} //si tiene llaves, el return tiene que ser explicito */


//Declaración de funcion (lo que hicimos hasta ahora)

function funcionSuma(numA, numB){
  return numA + numB
}

console.log(funcionSuma(4,5))


//Función flecha con return implícito
const arrowSuma = (numA, numB) =>/* return */ numA+numB;


console.log(arrowSuma(4, 5))


//Función flecha con return explicito
const arrowSumaLlaves = (numA, numB) => {
  return numA + numB
}

console.log(arrowSumaLlaves(4, 5))



// ARROW FUNCTION COMO CALLBACK

function calcular(callback, numA, numB){
  return callback(numA, numB)
}

//Puedo crear funciones flecha para pasar como callback en la propia llamada a la función que necesita dicho callback
console.log(calcular(((a,b) => a + b), 3, 5))

console.log(calcular((num1, num2) => num1*num2, 3, 6))

//console.log(calcular("hola", 5, 3)) // error: callback is not a function

