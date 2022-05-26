"use strict"

let numA = 4
let numB = 5;

// CONCATENACION O SUMA (+) 
const suma = numA+numB

console.log("suma: ", suma)
//// CONCATENACION (suma strings)
const str1 = "Hola"
const str2 = "mundo"

const frase = str1 + " " + str2
console.log(frase)

console.log("4" + 2)

console.log(2 + "2" + 2)

console.log(2 + 2 + "2" + 2)

/* Sacar por consola la frase "soy  nombre  y tengo  edad años" */
const nombre = "yojanny"
const edad = 31;
 console.log("soy " + nombre + " y tengo " + edad  + " años. " )


 // Resta (-)
  console.log("resta:", numA-numB)
  console.log("8" - numA)

  //MULTIPLICACION
  console.log("multiplicacion:", numA*numB)


  //DIVISION
  console.log("division:", numA/numB)

  //MODULO (%)
  //Devuelve el resto de la division
  console.log("modulo:", numB%numA)

  //POTENCIA (**)
  console.log("potencia:", numA**numB)
//////////
//AUTO ASIGNACION
let puntos = 5;


//// UNARIOS

//// INCREMENTO
puntos++// puntos = puntos + 1
puntos++
console.log("incremento", puntos)

//// Decremento
puntos--//puntos = puntos -1
console.log("decremento:", puntos)

//// Binarios


//SUMA
puntos += 4 //puntos = puntos + 4
console.log("suma:", puntos)


////Resta
puntos -= 3//puntos = puntos - 3

console.log("resta:", puntos)

//MULTIPLICACNION
puntos *=2// puntos = puntos *2
console.log("multiplicacion:", puntos)

//DIVISION
puntos /= 7 // puntos = puntos /7
console.log("division:", puntos)

//MODULO
puntos %= 3//puntos 0 puntos %2
console.log("modulo:", puntos)

//Potencia
puntos**=2 //puntos = puntos ** 2
console.log("potencia:",puntos)

///
/* cuando hacems operaciones con strings
(excepto concatenacion), si puede convierte el string
a numero y hace la operacion sin problema */

console.log("4" / "2")
/* si no puede convertirlo, da NAN(not a number) */
console.log("aa" / 2)


// ORDEN DE PRIORIDAD 
/* JavaScript sigue el orden de prioridad matematico
potencias > multiplicaciones/diviciones > sumas/resta */
  console.log(4+2*3)

  /* se puede dar prioridad con parentesis */
  console.log((4+2)*3) // = 6 * 3 = 18






