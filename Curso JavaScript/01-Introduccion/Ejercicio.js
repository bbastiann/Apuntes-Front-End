//Ejercicio de codificacion
//Se tiene los siguientes datos

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/* Calcular y comparar IMC de Luis y carlos
Para calcular el IMC de una persona es igual al peso dividido entre la altura al cuadrado */


var imcLuis = pesoLuis/(alturaLuis * alturaLuis);

var imcCarlos = pesoCarlos/(alturaCarlos * alturaCarlos);

console.log("El IMC de Luis es " +imcLuis);
console.log("El IMC de Carlos es " +imcCarlos);

var comparacion = imcCarlos > imcLuis;

console.log("El IMC de Carlos es mayor al de Luis: " +  comparacion);