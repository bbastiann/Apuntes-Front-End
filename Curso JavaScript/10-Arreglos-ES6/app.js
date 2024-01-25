/*****
 * Arreglos en ES6
 */

const ceviche = ['Pescado', 'Mariscos', 'Cebolla']; //Los arreglos comienzan en 0
console.log(ceviche);

//Cambiar un elemento del arreglo
ceviche[0] = 'Papas';
console.log(ceviche);

//Acceder a un valor en especifico
console.log(ceviche[1]);

//Acceder al ultimo valor del arreglo
//de forma basica

console.log(ceviche[ceviche.length - 1]);

/**
 * Agregar o quitar elementos de un Arreglo
 */

//Agregar
ceviche.push('Limon'); //Agrega un elemento al final del arreglo
console.log(ceviche);

//Quitar
ceviche.pop();
console.log(ceviche);


//Agregar elementos al inicio del Arreglo
ceviche.unshift('Zanahoria');
console.log(ceviche);


//Quitar elemento al inicio del Arreglo
ceviche.shift();
console.log(ceviche);

//Quitar/Agregar elementos con Splice

ceviche.splice(1,0,'Lechuga');
//El primer elemento es el indice que de donde debo comenzar
//El segundo es cuantos elementos voy a elminiar
//El tercero sirve para agregar un elemento en el indice 

console.log(ceviche);