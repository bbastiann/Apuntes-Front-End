//Destructuración - Destrucción - Destructuring


//ES5
var datos = ['Pablo' ,  30];

//var nombre = datos[0];
//var edad = datos[1];

//ES6
var [Nombre, Edad] =  ['Pedro', 35];
//console.log(Nombre);
//console.log(Edad);

//  Ejemplo 2

const persona = {
    Nombre2: 'Carlos',
    Edad2: 45
};

const {Nombre2, Edad2} = persona;
console.log(Nombre2);
console.log(Edad2);


//Utilizando Alias
/*const {Nombre3: n, Edad3: e} = persona;
console.log(n);
console.log(e);
*/


//Ejemplo Realista

const calcularMayoriaEdad = (year) => {
    const edad = new Date().getFullYear() - year;
    const mayoria = edad >= 18 ? true : false;
    return [edad, mayoria];
};

const [edadEjem, mayoriaEjem] = calcularMayoriaEdad(1994);
console.log(edadEjem);
console.log(`Es Mayor de Edad: ${mayoriaEjem}`);