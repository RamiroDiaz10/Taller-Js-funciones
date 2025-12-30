import { buscarElemento, contarPares, invertirArray, numeroMayor, sumarArray } from "./funciones.js";


const sumNumbers = [1,2,3,4,5,6,7];                //01
const numMayor = [1,23,34,5,6,7,46];               //02
const numberPar = [2,3,4,5,6,7,8,24,25,36,10];     //03
const invertArray = ['a','b','c','d'];             //04
const searchElement = ['arroz','papa','verduras','frutas'];  //05



console.log(sumarArray(sumNumbers));
console.log(numeroMayor(numMayor));
console.log(contarPares(numberPar));
console.log(invertirArray(invertArray));
console.log(buscarElemento(searchElement,'papa'));