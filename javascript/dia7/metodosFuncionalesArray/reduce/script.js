"use strict"

//METODO REDUCE
//Reduce el array a un unico elemento que puede ser cualquier cosa: un numero,un string,un booleano,un objeto, un array

// El elemento resultante sera lo que quede en el acumulador cuando acabe de recorrer el array

// el callback recibe dos valores: acumulador y valorActual (cada uno de los elementos del array)
// en cada vuelta guarda en el acumulador lo que devuelvea el return

//El metodo puede recibir un segundo parametro: el inicializador.

//si se pasa, el acumulador se inicia con ese valor, si no, coge el valor del primer elemento y se salta la primera vuelta

const numArr = [6, 8, 7, 25, 6]

const total = numArr.reduce((acc, current) => acc + current)

console.log(total)


// tiene mas sentido usar map, pero se puede usar reduce

const test = numArr.reduce((acc, current))

"use strict"

// MÉTODO MAP
//Devuelve un nuevo array con la misma cantidad de elementos que el original

//En cada vuelta coge un elemento del array (el callback recim¡be un argumento)

//opcionalemnte puede recibir el indice y el propio array

// En cada posición del nuevo array mete lo que devuelva el callback para esa posición del original

const numArr = [6, 8, 25, 1, 32]

const dobles = numArr.map(el => el * 2)

console.log(dobles)

const pares = numArr.map(el => el%2 === 0)

console.log(pares)


const aleatorios = numArr.map(el => Math.round(Math.random() * 10))

console.log(aleatorios)


// MAP CON ARRAY DE OBJETOS



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

// Hay que tener en cuenta que el elemento es el mimso objeto
// Si lo modifico, lo modifico en el original

const objMap = objArr.map(el => {
  el.like = true;
  return {precio: el.precio}
})

console.log(objMap)
console.log(objArr)


// Si queremos que en el array nuevo lo que haya sean copias de los objetos, por cada objeto devolvemos un objeto nuevo que contenga el spread (contenido) del original
const objMap2 = objArr.map(el =>{
  return {...el, stock: 0}
})

console.log(objArr)
console.log(objMap2)


// LOGICA DETRAS DE MAP

function map(arr, callback){
  const newArr = [];
for(const el of arr){
 const newEl =  callback(el)
 newArr.push(newEl)
}

return newArr
}

const dobles2 = map(numArr, el => el*2)

console.log(dobles2)
