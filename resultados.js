import { agregarPropiedad, aprobados, buscarElemento, calcularRectangulo, combinarObjetos, contarPares, contarPropiedades, invertirArray, mejorEstudiante, numeroMayor, promedioNotas, sumarArray } from "./funciones.js";


const sumNumbers = [1,2,3,4,5,6,7];                //01
const numMayor = [1,23,34,5,6,7,46];               //02
const numberPar = [2,3,4,5,6,7,8,24,25,36,10];     //03
const invertArray = ['a','b','c','d'];             //04
const searchElement = ['arroz','papa','verduras','frutas'];  //05
const studentNotes = { nombre: 'Cesar', notas: [ 100, 90, 90 ]} //06
const students = [                                              //07
    { nombre: 'Andres', notas: [50]},
    { nombre: 'Flor', notas: [60]},
    { nombre: 'Martin', notas: [40]},
    { nombre: 'Jorge', notas: [90]},
    { nombre: 'Robert', notas: [100]}
]
const people = { nombre: 'Andres', Edad: 26, }                  //08
//..............................................................//09
const oneObject = { 
    name: 'camilo', 
    Edad: 33
}
const twoObject = { 
    password: '12345', 
    altura: 65

}
//..............................................................
const dates = {                                                 //10
    name: 'robert',
    edad: 34,
    password: '12345'
}
//..............................................................//11
const broad = 23;
const high = 32;
//..............................................................//12
const student = [
    {name: 'joshep', nota: 60},
    {name: 'luis', nota: 10},
    {name: 'juan', nota: 20},
    {name: 'omar', nota: 90}
]


    



console.log(sumarArray(sumNumbers));
console.log(numeroMayor(numMayor));
console.log(contarPares(numberPar));
console.log(invertirArray(invertArray));
console.log(buscarElemento(searchElement,'papa'));
console.log(promedioNotas(studentNotes));
console.log(aprobados(students));
console.log(agregarPropiedad(people, '12345', 24));
console.log(combinarObjetos(oneObject, twoObject));
console.log(contarPropiedades(dates));
console.log(calcularRectangulo( broad, high ))
console.log(mejorEstudiante(student));