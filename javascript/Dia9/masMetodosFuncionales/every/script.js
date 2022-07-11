"use strict"

//METODO EVERY
//Devuele un booleano:true si el callback devuelve true para todos los elementos y false si no

//El callback recibe cada uno de los elementos y opcionalmente el indice y el array

// el callback debe devolver booleano



const nums = [2, 8, 6, 24]

const sonTodosPares = nums.every(num => !(num % 2))

console.log(sonTodosPares)

const people = [
  {name: "María",
  age: 15
},
{
  name: "Pepe",
  age:25
},
{
  name: "Laura",
  age: 27
}
]

const sonTodosAdultos = people.every(person => person.age >= 18)

console.log(sonTodosAdultos)


// LÓGICA DETRÁS DE EVERY

function every(arr, callback){
  for(const el of arr){
    if(!callback(el)){
      return false
    }
  }

  return true
}

console.log(every(nums, (num => num % 2 === 0) ))

console.log(every(people, (person => person.age >= 18)))
