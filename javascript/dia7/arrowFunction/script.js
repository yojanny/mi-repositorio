"use strict"
//ARROW FUNCTIONS
//Es una sintaxis mas sencillas para declarar funciones.
// son funciones ANONIMAS. si las queremos volver a usar, debemos guardarlas en una variable
/* (parametro1, parametro2 ...) igual o mayor => reultado//return implicito*/

/* (=> resultado// aunque no haya parametros, tiene que estar en parentesis) */
/* ()=> {
    //codigo
    return resultado
} // si tiene llaves, el return tiene que ser explicito*/
//Declaracion de funcion(lo que hicimos hasta ahora)

function funcionSuma(numA, numB){
    return numA + numB
}
console.log(funcionSuma(4,5))
//funcion fleca con return explicito
const arrowSuma = (numA, numB) => numA + numB;

console.log(arrowSuma(4, 5))

const arrowSumaLlaves = (numA, numB)=>{
    return numA + numB
}
console.log(arrowSumaLlaves(4, 5))

//ARROW FUNTION COMO CALLBACK

function calcular (callback, numA, numB){
    return callback(numA, numB)
}
//  PUEDO crear funciones flecha para pasar como callback en la propia llamada a la funcion que necesita dicho callback
console.log(calcular(((a,b) => a + b), 3, 5))

console.log(calcular((num1, num2) => num1*num2, 3, 6)) 