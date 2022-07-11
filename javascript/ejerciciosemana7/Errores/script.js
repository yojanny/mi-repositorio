"use strict";

  const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

let numero = prompt("Indroduce tu numero del DNI(Sin la Letra");

let letra = prompt("Introduce la letra de tu DNI (En mayusculas)");

letra = letra.toUpperCase();

function validarNIF (dni){
    try {
        if(dni.length !== 10 || typeof dni !== "String"){
            throw new Error("formato incorrecto: debe tener 10 caracteres")
        }
        console.log(dni.length)
    } catch (error) {
        
    }
    
}
   validarNIF("49918621-L") 
    /* if(numero < 0 || numero > 99999999){
        console.log("El numero proporcionado no es valido");
    }
    else{
        let letraCalculada = letras[numero % 23];

        if(letraCalculada != letra){

            console.log("La letra o el numero proporcionados no son validos");

        } else{
            console.log("El numero de DNI y su letra son correcto");
        }
    }
 
}
nif(numero) */