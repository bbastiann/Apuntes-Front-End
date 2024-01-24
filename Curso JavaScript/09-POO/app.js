/******
 * Manejo de Clases con JavaScript
 */

class Persona{
    constructor(nombre, edad, profesiones = []){
        this.nombre = 'Pablo',
        this.edad = 30;
        this.profesiones = profesiones;
    }

    //Cuando creamos metodos dentro de una clase no es necesario
    //usar la palabra function
    GetBiografia(){

        //template string
        let biografia = `${this.nombre}, tiene ${this.edad}. Profesiones: `;
        this.profesiones.forEach((profesion) => {
            biografia += `${profesion}, `;
        })
        return biografia;
    }
}

//Es necesario tener un metodo constructor para que se tome como clase 
// o sino se considerara como un metodo cualquiera

const persona1 = new Persona('Carlos', 25, ['Tecnico, Arquitecto']);
const persona2 = new Persona('Maria', 45, ['Doctor']);

/*console.log(typeof persona1);
console.log(persona1.nombre);
console.log(persona2.edad);*/

console.log(persona1.GetBiografia());
console.log(persona2.GetBiografia());

/****
 * SubClases
 */

//Una subclase es una clase hija de la clase padre

class Empleado extends Persona{
        constructor(nombre, edad, profesiones = [], sueldo, pusto){
            super(nombre, edad, profesiones); //necesitamos acceder al constructor de la clase padre para pasar los parametros usando 'super'
            this.sueldo = sueldo;
            this.puesto = puesto;
        }
}

const empleado1 = new Persona('Bastian', 29, ['Ingeniero Civil Informatico'], 15000, 'ingenieria');
const empleado2 = new Persona('Ignacio', 29, ['Ingeniero Civil Informatico'], 10000, 'RRHH');

console.log(empleado1.GetBiografia());
console.log(empleado2.GetBiografia());

