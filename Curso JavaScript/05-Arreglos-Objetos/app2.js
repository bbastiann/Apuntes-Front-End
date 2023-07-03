/***************
 * Objetos Literales
 */

var persona = {
    Nombre: 'Pablo',
    Apellido: 'Aguilera',
    Gustos: ['Futbol','Peliculas','Ingles'],
    esCasado: true
};

console.log(persona); 

persona.esCasado = false;

console.log(persona);

/************************
 * Objetos con Syntaxis Object
 */


var persona2 = new Object();

persona2.Nombre = 'Juan';
persona2.Apellido = 'Fernandez';
persona2.Gustos = ['Trabajar', 'Jugar play', 'Futbol'];
persona2.esCasado = false;

console.log(persona2);


/**********************
 * Objetos y Metodos
 */

var persona3 = {

    //Propiedades
    Nombre: 'Bastian',
    Apellido: 'Berrios',
    Gustos: ['Futbol','Peliculas','Ingles'],
    esCasado: true,
    yearNacimiento: 1994,

    //Metodos
    calcularEdad: function(){
        return 2023-this.yearNacimiento;
    }
};

console.log(persona3);
var edad = persona3.calcularEdad();
console.log(edad);
