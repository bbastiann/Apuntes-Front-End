//ES5 - Variables
var nombreES5 = 'Pablo';
var edadES5 = '35';
nombreES5 = 'Carlos'; // hacemos una mutacion

console.log(nombreES5);

//ES6 - Variables 
const nombreES6 = 'Fernando';
let edadES6 = 28;
//nombreES6 = 'Crisitan';
console.log(nombreES6); //Aparecera error por ser una constante.

//Bloque y Alcance de las variables
//ES5 
var test;
test = 10;

function Prueba(){
    test = 15;
}

Prueba();
console.log("La variable en ES5 es: " + test);

//ES6
let test2;
test2 = 10;

function Prueba2(){
    let test2;
    test2 = 15;
}

Prueba2();
console.log("La variable en ES6 es: " + test2);


//TEMPLATE STRINGS

let nombre = 'Pablo';
let apellido = 'Gutierrez';
const ciudad = 'Santiago';
const nacimiento = 1985;

function CalcularEdad(year){
    return 2023 - year;
}

//ES5
console.log(nombre +' '+ apellido +', nacio en ' + ciudad +', y su edad es ' + CalcularEdad(nacimiento));

//ES6
console.log(`${nombre} ${apellido}, nacio en ${ciudad}, y su edad es ${CalcularEdad(nacimiento)}`);


//NUEVOS METODOS PARA CADENAS ES6

let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
console.log(`${nombre} `.repeat(5)); //Repite 5 veces el valor 
console.log(nombreCompleto.includes('blo ')); //Devuelve true o false si una cadena esta dentro del texto
console.log(nombreCompleto.startsWith('Pa')) //Devuelve true o false si el comienzo de una cadena es igual al parametro que le estoy pasando
console.log(nombreCompleto.endsWith('rrez')) //Devuelve true o false si el final de una cadena es igual al parametro que le estoy pasando


