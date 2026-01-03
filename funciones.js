//Arrays
//01. sumar numeros de un array
function sumarArray (array) {
    let total = 0;
    array.forEach( num => total += num);
    return total;
}
//02. encontrar numero mayor
function numeroMayor (array){
    let mayor = array[0];
    for( let num of array ) {
        if(num > mayor){
            mayor = num;
        }
        
    }
    return mayor;
}

//03. contar elementos pares
function contarPares (array){
    let total = array.filter ( num => num % 2 === 0 );
    return total.length;
}
//listas
//04.invertir un array
function invertirArray (array){
    let arrayinvert = [];
    for ( let i=array.length -1; i>=0; i-- ){
        arrayinvert.push(array[i]);
    }
    return arrayinvert;

}
//05. buscar un elemento 
function buscarElemento (array, elemento){
    const element = array.includes(elemento);
    return element;
}
//06. calcular promedio de notas
function promedioNotas (estudiante) {
    let nota = estudiante.notas;
    let promedio = 0;
    nota.forEach( num => promedio +=num / nota.length );
    return promedio;
}
//07. filtrar estudiantes aprovados
function aprobados (listaEstudiantes){
    let resultado = listaEstudiantes.filter( note => note.notas >= 60);
    return resultado;
}
//08. Agregar propiedad a objeto
function agregarPropiedad (objeto, clave, valor){
    objeto.password = clave;
    objeto.altura = valor;
    
    return objeto;
}
//09. Combinar dos objetos
function combinarObjetos(object1, object2){
    const combi = { ...object1, ...object2};
    return combi;
} 
//10.contar propiedades de un objeto
function contarPropiedades (objeto){
    const total = Object.keys(objeto).length;
    return total;
}
//11. calcular area y perimetro de un rectangulo
function calcularRectangulo ( ancho, alto ){
    const perimetro = (ancho + alto ) *2;
    const area = ancho * alto;
    const total = { area: area, perimetro: perimetro };
    return total;
}
//12. Buscar el estudiante con la nota mas alta
function mejorEstudiante (array){
    return array.reduce((mayor, actual) =>{
        return actual.nota > mayor.nota ? actual : mayor
    });
    
} 
//13. eliminar elementos duplicados de un array
function eliminarDuplicados (array) {
    return array.filter(( num, index) => {
        return array.indexOf(num) === index;
    })

    //    return [...new Set(array)];
}
//14.ordenar array de numeros
function ordenarArray (array){
    let list = array.length;
    for ( let i=0; i<list-1; i++){
        for( let k=0; k<list-1-i; k++){
            if( array[k] > array[ k+1 ] ){
                let resultado = array[k];
                array[k] = array[ k+1 ];
                array[ k+1 ] = resultado;
            };
        };
    };
    // array.sort((a, b) => a - b);
    return array;
}
// 15. Validar contraseña:
function ValidarContrasena (contrasena) {

    let tieneMayuscula = false;
    let tieneNumero = false;
    let minCaracteres = false;

    for (let pass of contrasena ) {
        if( pass >= 'A' && pass <= 'Z' ) {                //unicode
            tieneMayuscula = true;
        }
        if( contrasena.length >= 8 ){
            minCaracteres = true;
        }

        if( pass >= '0' && pass <= '9' ) {                            
            tieneNumero = true;
            
        } 
           
    }
    
    return tieneMayuscula && minCaracteres && tieneNumero;

//     const reglas = [
//     { ok: /[A-Z]/.test(contrasena), msg: "Debe tener al menos una mayúscula" },   .......version ia: primero atacar reglas o errores y luego proceso
//     { ok: /[0-9]/.test(contrasena), msg: "Debe tener al menos un número" },
//     { ok: contrasena.length >= 8,  msg: "Debe tener al menos 8 caracteres" }
//   ];

//   const errores = reglas.filter(r => !r.ok).map(r => r.msg);

//   if (errores.length) {
//     errores.forEach(e => console.log(e));
//     return false;
//   }

//   console.log("Contraseña válida ");
//   return true;

}
// 16. Calcular factorial:
function factorial (numero){
    let resultado = 1;
    for( let i=1; i<=numero; i++ ){
        resultado *= i;
    }
    return resultado;
    

}
// 17. Generar tabla de multiplicar:
function tablaMultiplicar(num){
    let i = 1;
    while (i <= 10) {

    console.log(`${num} x ${i} = ${num*i}`);
    
    i++; 
    }
    return;
}
// 18. Contar vocales en un string:
function contarVocales (texto){

}



export {
    sumarArray,
    numeroMayor,
    contarPares,
    invertirArray,
    buscarElemento,
    promedioNotas,
    aprobados,
    agregarPropiedad,
    combinarObjetos,
    contarPropiedades,
    calcularRectangulo,
    mejorEstudiante,
    eliminarDuplicados,
    ordenarArray,
    ValidarContrasena,
    factorial,
    tablaMultiplicar,
    contarVocales,
} 