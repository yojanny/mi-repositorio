"use strict"

//Crer un bucle que vaya de 0 a 100 incrementando de 10 en 10

/*  

for(let i = 0; i <= 100; i+=10){
    console.log(i)

    }  */

    //crear un bucle que vaya de 50 a 20 de uno en uno

   /*  

    for(let i = 50; i >= 20; i--){
        console.log(i)
    } */

    //crear un bucle que recorra todos los numeros del 1 al 10 y nos diga si son pares o impares




/* for(let i =1; i <= 10; i++){
    console.log(i)
    if(i%2=== 0){
        console.log(i + "es par")
    } else{
        console.log(i + " es impar")
    }
    
} 
 */

// continue
//pasa a la siguente vulta

for(let i = 0; i < 5; i++){
    console.log(i)
    
    if(i===2){
        continue
    }
    console.log("no es 2")
}

//BREAK
//para el bucle
for(let i = 0; i < 10000; i++){
    console.log(i)
    
}
