"use strict"


// Convierte el código de la calculadora en una función
//https://gitlab.com/blueoceanstart/hack-a-boss/jsb12co/3-javascript/-/blob/master/dia02/condicionales/switch/ejercicio.js





function calculadora(numA , operador, numB){
     
    switch (operador){
        case "-":
            return (numA - numB)
    
            
    
            case "+":
                return (numA + numB) 
    
                
    
            case "x":
                return (numA * numB)
    
            
    
                case "/":
                    return(numA / numB)
                
    }
}

console.log(calculadora(3, "+" ,2))

console.log(calculadora(6, "-", 4))

console.log(calculadora(3, "/", 2))

console.log(calculadora(6, "x", 4))

let userNumA = prompt("introduce un numero")
let userOperador = prompt("introduce el operador")
let userNumB = prompt("introduce el segundo numero")

console.log(calculadora(userNumA, userOperador, userNumB))


