"use strict";

//MÉTODO SORT
// Ordena el array según el resultado del callback
//MODIFICA EL ORIGINAL

//EL callback recibe dos argumentos: dos elementos del array (empezand por el 0 y el 1, luego el 1 y el 2, el 2 y el 3...)

// El callback tiene que devolver un número positivo, negativo o 0

// si el numero es mayor que 0, el primer elemento se coloca después del segundo

// SI el numero es menor que 0, el primer elemento se coloca antes que el segundo

//Si el numero es igual a 0, se quedan como están


const numArr = [8, 25, 3, 87, 1, 0, 16]

numArr.sort((a, b) => b - a) // a - b = menor a mayor || b - a = mayor a menor

console.log(numArr)

const stringArr = ["Caracol", "Zapato", "Berenjena", "lago", "Limón", "Amapola", "Bota", "Casa"]

stringArr.sort()

console.log(stringArr)



const objArr = [
  {
    objeto: "camiseta",
    precio: 15
  },
  {
    objeto: "pantalon",
    precio: 30
  },
  {
    objeto: "calcetines",
    precio: 5
  }
]

objArr.sort((a, b) => a.precio - b.precio)

console.log(objArr)

/* 
for(const objeto of objArr){
  objeto.precio.sort(a, b => a-b) 
} */
