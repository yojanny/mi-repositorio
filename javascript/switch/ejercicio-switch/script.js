"use strict"

//Vamos a tener 3 variables: 2 de números y una de operador (string)
//En base al operador haremos la operación correspondiente con los números
// suma, resta, multiplicación y división

/* let numA = 6;
let numB = 4;
let operador = "x"; */
// en este caso por consola debe salir 10 (6 * 4)
// si el operador es - saldrá 2 ( 6 - 4)
// así sucesivamente sin cambiar el codigo, solo la variable operador


let numA = 6;
let numB = 4;
//Prompt permite al usuario introducir datos
let operador = numA = prompt("Introduce un numero");
operador = prompt("Introduce el operador (+, -, x, /)"); 
numB = prompt("Introduce el segundo numero");
; 


switch (operador){
    case "-":
        console.log(numA - numB)

        break

        case "+":
            console.log(numA + numB)

            break

        case "x":
            console.log(numA * numB)

            break

            case "/":
                console.log(numA / numB)
            break
}
 

