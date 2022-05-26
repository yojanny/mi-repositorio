"use strict"
/* Crea una variable hora(number.)
Escribe un codigo que saque por consola "buenos dias" entre las 6 y las 14, "buenas tardes"
entre las 14 y las 22 y "buenas noches" entre las 22 y las 6 */
/*hora = new Date().getHours*/

let hora = 16
/*prompt("indica la hora")*/

if(hora >= 6 && hora < 14) {
    console.log("Buenos dias")
}

else if (hora >= 14 && hora < 22){


console.log("Buenas tardes")
}

else if (hora >= 22 && hora <= 24){
    console.log("Buenas noches")
}

