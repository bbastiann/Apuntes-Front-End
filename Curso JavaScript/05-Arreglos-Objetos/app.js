/***************
 * Arreglos y objetos
 */
console.log("Arreglos y objetos");
var nombres = ["Fernando","Claudio","Pedro"];
var verduras = new Array ("Zanahoria","Cebolla","Perejil");

console.log(nombres[2]);
console.log(verduras[1]);

nombres[1] = "Bastian";
console.log(nombres[1]);
verduras[2] = "Tomate";
console.log(verduras[2]);

console.log(nombres.length);

/****************************
 * Operaciones con Arreglos
 */
console.log("Operaciones con Arreglos");
var frutas = ['pera','manzana','sandia'];
console.log(frutas);


//Forma no optima
for(var i = 0; i<= frutas.length - 1; i++){
    console.log(frutas[i]);
}

//Forma Optima
frutas.forEach(function(elemento, indice, array){
    console.log(elemento,indice);
});


frutas.push("Banana");
console.log(frutas);
frutas.unshift("Chirimoya");
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);

/****************************
 * Arreglos con elementos de diferente tipo
 */

console.log(" Arreglos con elementos de diferente tipo");

var miarreglo = ["Fernanda",123,1.0254,true];
console.log(miarreglo);