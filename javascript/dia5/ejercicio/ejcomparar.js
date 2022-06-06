"use strict";

//Crea una función que reciba dos arrays y devuelva true si son iguales devuelve true y si no, devuelve false

const arr1 = ["a", "b", "c"]
const arr2 = ["a", "b", "c"]
const arr3 = ["a", "b", "d"]
const arr4 = ["a", "b", "c", "d"]


function soniguales(arrA, arrB){
    for(let i = 0; i < arrA.length; i++)
    {
        if(arrA[i] !== arrB[i]){
            return false
        }

    }

}