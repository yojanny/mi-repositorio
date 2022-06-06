"use strict";

// Crea una funcion que reciba un string y devuelve true si es palindromo y false si no

//un string es palindromo cuando se lee igual al derecho y al reves

// podemos asumir que no va a haber signos de puntuacion ni acentos, pero si puede haber mayusculas y espacios en distintos sitios

const ejstring1 = "Aman a panama"
const ejstring2 = "Ana lava lana"

function sumar(string){


let volteao = string.split("").reverse().join("");
console.log(string, "este es el string")
console.log(volteao, "este es el volteao")
if (string === volteao.toLowerCase()) {
    return true;
} 
return false


}
console.log(sumar(ejstring1))

 // 1. crear funcion con nombre