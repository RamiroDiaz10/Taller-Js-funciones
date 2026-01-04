import { agregarPropiedad, aprobados, buscarElemento, calcularImpuestos, calcularRectangulo, combinarObjetos, contarPares, contarPropiedades, contarVocales, eliminarDuplicados, factorial, invertirArray, mejorEstudiante, numeroMayor, ordenarArray, promedioNotas, sumarArray, tablaMultiplicar, totalCarrito, ValidarContrasena } from "./funciones.js";


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
const repeat = [2,1,2,3,4,3,5,4]                                //13
const order = [ 8,3,9,4,6,1,5]                                  //14
const password = prompt('ingresa tu contrasena(al menos un numero, una mayuscula y minimo 8 caracteres): ');   //15
const fact = Number(prompt('ingrese numero para sacar factorial n!: '));        //16
const multi = Number(prompt('ingrese numero para sacar tabla de multiplicar: ')); //17
const vocal = 'holAaPe'                                      //18
//...........................................................//19
const employed = [
    { name:'jose', saldo: 2000 },
    { name:'Raul', saldo: 5000 },
    { name:'Rita', saldo: 8000 },
    { name:'Rodri', saldo: 3000 }
]   
const iva = 0.2;
//........................................................... 
const totalCar = [                                           //20
    {producto:'manzana', precio: 2000, cantidad:3, descuento: 0.9},
    {producto:'pera', precio: 5000, cantidad:6, descuento: 0.8},
    {producto:'papa', precio: 3000, cantidad:7, descuento: 0.9}

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
console.log(eliminarDuplicados(repeat));
console.log(ordenarArray(order));
console.log(ValidarContrasena(password));
console.log(factorial(fact));
console.log(tablaMultiplicar(multi));
console.log(contarVocales(vocal));
console.log(calcularImpuestos(employed, iva));
console.log(totalCarrito(totalCar));