/****
 * Objeto String
 */

//Documentacion 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

console.log("OBJETO STRING");

let nombre = ' Fernando Gutierritos ';
let clave = '324124545clave457.e';

console.log(nombre.length); //length es una propiedad
console.log(nombre.toLocaleLowerCase()); //este es un metodo
console.log(nombre.toLocaleUpperCase());
console.log(nombre.trim()) //eliminaremos el espacio del inicio y el final
console.log(clave.includes('claves')); //verifica si la cadena esta dentro / Devuelve TRUE or FALSE


/****Destructuración de Objetos***/

//Nos permite extraer datos, ya sea objetos o arreglos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const respuesta = {
    codigo: 200,
    dato:{
        persona: {
            nombre: 'Pablo',
            direccion : {
                ciudad: 'Lima',
                pais: 'Peru'
            }
             
        }
    }
}

let { codigo } = respuesta;

console.log(respuesta);
console.log(codigo);


