/******
 * Manejo de Clases con JavaScript
 */

class Persona{
    constructor(nombre, edad, trabajos = []){
        this.nombre = 'Pablo',
        this.edad = 30;
        this.trabajos = trabajos;
    }

    //Cuando creamos metodos dentro de una clase no es necesario
    //usar la palabra function
    GetBiografia(){

        //template string
        let biografia = `${this.nombre}, tiene ${this.edad}. Trabajo: `;
        this.trabajos.forEach((trabajo) => {
            biografia += `${trabajo}, `;
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
