"use strict"

//TRUTHY Y FALSY
/* En JS TODO es o truthy (evalua a true) o falsy (evalua a false) */

// FALSY
//Básicamente todo lo que no tenga valor


/* Puedo usar la doble negacion para ver a qué evalua algo (true o false) */

//0
console.log(!!0)

//"" string VACÍO
console.log(!!"")

//undefined
console.log(!!undefined)

//null
console.log(!!null)

//NaN
console.log(!!NaN)


console.log("//////")


//TRUTHY
//Todo lo demás

// " ", "hola" strings con contenido
console.log(!!" ")
console.log(!!"hola")

//NUmeros distintos de 0
console.log(!!4)
console.log(!!-4)

//Arrays, vacios o no
console.log(!![])
console.log(!!["hola"])

//Objetos, vacios o no
console.log(!!{})
console.log(!!{key: "value"})


//Funciones
console.log(!!(()=>0))

//...

console.log("/////")


let user;

/* user = "Zoe"; */

if(user){
  console.log("el usuario existe")
} else{
  console.log("el usuario no existe")
}


if(!user /* user === undefined */){
  console.error("ERROR: el ususario no existe")
}


let num = 3

if(num % 2){ /* si hay resto... */
  console.log("es impar")
}



let stock = 0

if(stock){ /* if(stock > 0) */
  console.log("hay stock")
} else{
  console.log("agotado")
}
