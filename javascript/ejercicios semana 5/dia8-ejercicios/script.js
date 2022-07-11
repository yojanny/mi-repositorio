"use strict"

/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  
 * 
 *  
 *  - 
 *  - 
 * ! A partir de aquí es útil usar find, pero se puede con filter
 *  - 
 *  - 
 *  - 
 *
 *     
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";


const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];



 //- 1. Obtén la suma total de todas las edades de las personas.
const edadSuma= persons.reduce(((acc, curret) => acc + curret.age),0)

   console.log(edadSuma)
 

//- 2. Obtén la suma total de todas las edades de las personas francesas.

const persFracesas = persons.filter( person => person.country === "FR")

const sumaFranceses = persFracesas.reduce(((acc, curret) => acc + curret.age),0)

console.log(sumaFranceses)

//3. Obtén un array con el nombre de todas las mascotas.

const nombreMacotas = persons.map(el => el.pet.name)

console.log(nombreMacotas)

//4. Obtén un array con las personas que tengan gato.
const personGato = persons.filter(person => person.pet.type === "gato")


console.log(personGato)

//const duenosGato = persons.map(person => person.name)

//console.log(duenosGato)


//5. Obtén un array con los coches de los españoles.

const cochesEspanoles2 = persons.filter(person => person.country === "ES").map(person => cars.find(car => car.id === person.car))

console.log(cochesEspanoles2)




//6. Obtén un array con las personas que tengan un coche de la marca Ford.

const cocheFord = cars.filter(car => car.brand === "Ford").map(car => persons.find(person => person.car === car.id))

console.log(cocheFord)






//7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
       //la info de su coche. Ejemplo a continuación:
/*  [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ] */


  const people = persons.map(el => el).filter(cars=> cars)

  console.log(people) 


  