

"use strict"

//MÉTODO SOME
// Devuelve un booleano: true si el callback devuelve true para ALGÚN elemento, false si no


//El callback recibe cada uno de los elementos y opcionalmente el indice y el array

// El callback debe devolver un booleano

const nums = [2, 8, 6, 24]

const algunImpar = nums.some(num => num % 2 /* !== 0 */)

console.log(algunImpar)

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


const algunMenor = people.some(person => person.age < 18)

console.log(algunMenor)


// LOGICA DE SOME

function some (arr, callback){
  for(const el of arr){
    if(callback(el)){
      return true
    }
  }

  return false
}








// la logita de some es todo lo contratio de every

function some (arr, callback){
    for(const el of arr){
        if(callback(el)){
            return true
        }
    }
    return false
}

console.log(some)