"use strict"

//ARRAYS
//Un array es un conjunto de datos (una lista), con orden
//Van entre corchetes
//Puede tener cualquier tipo de dato, separan con comas
// ["un string", "otro string", variable, 8, ()=>{console.log("soy una función!")}, ["hola", 1, 2], {}]


// Cómo crear un array

//Vacio

const arr1 = Array()
const arr2 = []

console.log(arr1, arr2)

// Array con cosas
const arrCosas = ["hola", 2, 45, "adiós"]

console.log(arrCosas)

const colores = ["rojo", "azul", "amarillo"] //dfg765ajfbiwet8


//Seleccionar un elemento del array
// Empezamos a contar en 0!!
// array[posicion]

console.log(colores[1])

const arrAnidado = [["a", "b", "c"], [1, 2, 3]]

console.log(arrAnidado[0][1])

function generateArr(){
  return arrAnidado[1]
}

console.log(generateArr()[2])

// Modificar posiciones

colores[3] = "verde"

colores[5] = "rosa"

colores[1] = "naranja"

console.log(colores)


/////
// Los arrays son PUNTEROS
// Lo que guardo es una referencia a un espacio fisico de la memoria. Puedo modificar lo que hay en él, que la referencia sigue siendo la misma.

// Cuando copio un puntero, solo copio la refencia, el espacio es el MISMO, y las modificaciones, se aplican a los dos

const colores2 = colores;

colores2[4] = "azul"

console.log(colores2)
console.log(colores)

console.log(colores === colores2)

//Además, no podemos comprobar directamente si tienen el mismo contenido, porque dos array nunca seran iguales si no son el MISMO array

console.log([1, 2] === [1, 2])


//¿Como podemos duplicar arrays?
//SPREAD (...)
//OJO! Es una copia poco profunda. SI tuviera dentro arrays u objetos seguiria pasando lo mismo

console.log(...colores) // spread saca para fuera una copia de los datos que haya dentro


const colores3 = [...colores] //meto el contenido (spread) del array original en uno nuevo

console.log(colores3 === colores)

//Ahora si modifico la copia, no afecta al original
colores3[0] = "violeta"

console.log(colores3)
console.log(colores)



