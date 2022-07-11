"use strict"

//JSON
//JavaScript object notation
//notacion de objetos de javascript

// el formato es la transcripcion de estructuras complejas de javascript a texto plano

// nos permite, por ejemplo, enviar "objetos" a traves de la red

// cuando tenemos JSON en javaScript siempre es un string (es texto plano)

//Algo caracteristico de l texto json es que las claves de los objetos , tambien van entre comillas

const obj ={
    nombre: "Zoe",
    edad: 28
}

const json = `{
    "nombre": "Zoe",
    "edad": 28
  }
  `
  
  
  // PASAR DE JS A JSON: JSON.stringify(obj)
  
  const objaJSON = JSON.stringify(obj)
  
  console.log(objaJSON)
  console.log(objaJSON.nombre)
  
  
  
  // PASAR DE JSON A JS: JSON.parse(json)
  
  const jsonaObj = JSON.parse(json)
  
  console.log(jsonaObj)
  console.log(jsonaObj.nombre)
  
  
  
  // COPIAS PROFUNDAS CON JSON
  
  const objComplejo = {
    nombre: "Zoe",
    edad: 28,
    mascota: {
      nombre: "Nymeria"
    }
  }
  
  const complejoJSON = JSON.stringify(objComplejo)
  
  const complejoCopia = JSON.parse(complejoJSON)
  
  complejoCopia.mascota.especie = "gato"
  
  console.log(complejoCopia)
  
  console.log(objComplejo)
  
  
  
  // NO SOPORTA ESTRUCTURAS CIRCULARES
  
  const user = {
    nombre: "Zoe"
  }
  
  const mascota = {
    nombre: "Nymeria",
    dueno: user
  }
  
  user.mascota = mascota
  
  console.log(user)
  
  //const cicularJSON = JSON.stringify(user)
  
  
  // Curiosidad: método para hacer copias profundas, además permite estucturas circulares
  // structuredClone(elemento)
  
  const copiaUser = structuredClone(user)
  
  copiaUser.mascota.especie = "gato"
  
  console.log(copiaUser)
  
  console.log(user)
  




    // pasar un elemento de javaScirpt a JSON: JSON .stringify(obj) 