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

const GetPersonaDatos = () => {
    const respuesta = [
        {
        codigo : 200,
        data : {
            persona : {
                    nombre : 'Pablo',
                    direccion : {
                        ciudad : 'Lima',
                        pais : 'Peru'
                    }
                }
            }
        },
        {
            codigo : 400,
            data : {
                persona : {
                        nombre : 'Fernanda',
                        direccion : {
                            ciudad : 'Santiago',
                            pais : 'Peru'
                        }
                    }
            }
        },
        {
            codigo : 600,
              data : {
                    persona : {
                        nombre : 'Cristian',
                        direccion : {
                                ciudad : 'Temuco',
                                pais : 'Peru'
                            }
                        }
                    }
        }
    ]
    return respuesta;
}

let { codigo : status, data : { persona : { nombre : nom }} } = GetPersonaDatos()[0];

console.log(nom);

for( const { codigo : status, data : { persona : { nombre : nom }} } of GetPersonaDatos()){
    console.log(nom);
}



