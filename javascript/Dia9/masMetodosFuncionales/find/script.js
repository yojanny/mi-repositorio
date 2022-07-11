"use strict"

//METODO FIND
//Practicamente igual que filter,pero en lugar de devolver un array con todos los elementos que cumpla la condicion,devuelve solo el primero y sin estar en un array
//El callback recibe un parametro(cada elemento del array) y opcionamente el indicie y el propio array
// el callback debe devolver un boolean y en cuanto sea true,el metodo devuelve el elemento de esa vuelta y para de ejecutarse

//si no hay ninguna condicion, devuelve undefined

const numArr = [5, 8 ,15 ,24 ,32]

const par = numArr.find(num => num%2 === 0)

console.log(par)

const people = [
    {
        name: "Maria",
        age: 27
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
    
    const adult = people.find(person => person.age >= 18)
    
    console.log(adult)
    
    const laura = people.find(person => person.name === "Laura")
    
    console.log(laura)
    
    
    // LÓGICA DETRÁS DE FIND
    
    function find(arr, callback){
      for (const el of arr){
        if(callback(el)){
          return el
        }
      }
    }
    
    
    console.log(find(people, (person => person.age >= 18)))
    
]