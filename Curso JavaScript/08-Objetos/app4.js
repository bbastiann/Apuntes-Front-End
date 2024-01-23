/****
 * Objeto String
 */

//Documentacion: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

console.log("OBJETO STRING");

let nombre = ' Fernando Gutierritos ';
let clave = '324124545clave457.e';

console.log(nombre.length); //length es una propiedad
console.log(nombre.toLocaleLowerCase()); //este es un metodo
console.log(nombre.toLocaleUpperCase());
console.log(nombre.trim()) //eliminaremos el espacio del inicio y el final
console.log(clave.includes('claves')); //verifica si la cadena esta dentro / Devuelve TRUE or FALSE

