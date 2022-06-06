"user strict"

// 1- Crea la función isEven. Recibirá un número y devolvera true si el numero es par, y false si es impar 


function isEven(numero){
    if (numero %2 ===0){
        return true
    } {
        return false
    }
} 
 
console.log(isEven(2))


//2- Crea la función isDivisible. Recibe dos numeros y devuelve true si el primero es divisible entre el segundo, y false si no.

function isDivisible(numA, numB){
    if(numA% numB ===0){
        return true
    }
    return false
}

console.log(isDivisible(9, 5))
// 3 - Crea la función isPrime. Recibe un número y devuelve true si es primo y false si no
//(Un numero es primo cuando no es divisible entre ninún número entre el 1 y él miso, no incluidos)
function isPrime(numero){
    for(let i = 2; i < numero; i++){
        
        if(isDivisible(numero, i)){
            return false
        }
    }
    return true
}
console.log(isPrime(11))
//4 - Cresa una funcion que reciba un número y saque por consola todos los primos desde 2 hasta ese número.

function primos (numero){
    for(let i = 2; i <= numero; i++){
        if(isPrime(i))
        console.log(i)
    }

}
primos(100)