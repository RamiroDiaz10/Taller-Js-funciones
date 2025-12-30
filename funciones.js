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


export {
    sumarArray,
    numeroMayor,
    contarPares,
    invertirArray,
    buscarElemento,
}