//METODOS
console.log("Metodos");

let personaA = {
    nombre: 'Pablo',
    edad: 30,
    sueldo: 30000,

    MetodoPrueba: function(){
        return 'Resultado desde Prueba';
    },

    CambiarEdad: function(e){
        this.edad = this.edad + e;
    }
}


let result = personaA.MetodoPrueba();
console.log(result);
personaA.CambiarEdad(3);
console.log(personaA.edad);