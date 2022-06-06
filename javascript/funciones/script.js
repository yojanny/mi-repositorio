"use strict"

//FUNCIONES
//Las funciones nos permiten crear bloques de código reutilizables

/* 
//declaración

function nombre(parametro1, parametro2, parametro3...){
  //Código
  // Debería utilizar los parámetros que para eso están
}


//Llamada (se ejecuta)
nombre(argumento1, argumanto2, argumento3...)



PARAMETRO: variable que solo existe dentro de la función y sirve para definoir lo que va a cambiar en cada llamada

ARGUMENTO = el valor definido que pasamos a la función para que trabaje con él

Al llamar a la función, los parámetros se igualan a los argumentos según su orden.
*/

let persona1 = 15;

/* if(persona1 >= 18){
  console.log("es mayor de edad")
}else{
  console.log("es menor de edad")
} */


let persona2 = 30;

/* if(persona2 >= 18){
  console.log("es mayor de edad")
} else {
  console.log("es menor de edad")
} */

//DRY = DON'T REPEAT YOURSELF
//WET = WE ENJOY TYPING

function isAdult(person){
  if(person >= 18){
  console.log("es mayor de edad")
} else {
  console.log("es menor de edad")
}
}

isAdult(persona1)
isAdult(persona2)

isAdult(20)


function funcion(parametro1, parametro2, parametro3){
  console.log("paramtro1 = ", parametro1)
  console.log("paramtro2 =", parametro2)
  console.log("paramtro3 =", parametro3)
}

funcion("argumento1", "argumento3", "argumento2")


// RETURN

// Define lo que devuelve la función

function isAdultReturn(age){
  if(age >= 18){
    return true
  } else {
    return false
  }
}

let esAdulto = isAdultReturn(20)
console.log(esAdulto)

console.log(isAdultReturn(15))




function getRandom(min, max){
  let randomNumber = Math.floor((Math.random() * (max + 1 - min)) + min)

  return randomNumber
}

console.log(getRandom(5, 15))


//Return para la funcion
function bucle(num){
  for(let i = 0; i < num; i++){
    console.log(i)
    if(i === 5){
      return
    }
  }

  console.log("esto nunca se ejecuta")
}

bucle(10)


// Una función no tiene por qué tener parámetros
function sayHi(){
  console.log("Hola")
}

sayHi()
sayHi()
sayHi()


//Las funciones pueden llamar a otras funciones

function random255(){
  return getRandom(0, 255)
}

console.log(random255())



//FUNCIONES PURAS VS IMPURAS
//Las funciones puras dan siempre el mimso resultado para la misma entrada, no deberían modificar valores de fuera

//Dan resultados direrentes con la misma entrada

//Debemos intentar que las funciones sean puras (no siempre se puede, cualquiera que incluya componentes aleatorios, será impura)

let num = 2; //Variable 

function dobleImpura(numero){
  num *= 2; //modifico la variable num
 // num *= 2;
  return num
}

console.log(dobleImpura())
console.log(dobleImpura())


num = 2 // reseteo la variable

function doblePura(num){ //parametro
    num *= 2; //modifico el parametro (solo existe dentro de la funcion)
   // num *= 2;

  return num
}

console.log(doblePura(num))
console.log(doblePura(num))
console.log(doblePura(5))


console.log(`numero aleatorio de 0 a 255: ${random255()}`)

console.log(`rgb(${random255()}, ${random255()}, ${random255()})`)

const randomNum = random255()

console.log(randomNum)
console.log(randomNum)
console.log(randomNum)
