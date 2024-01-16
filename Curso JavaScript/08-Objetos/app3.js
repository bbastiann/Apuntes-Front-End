//METODOS
console.log("Metodos");

let personaA = {
    nombre: 'Pablo',
    edad: '30',
    sueldo: 30000,

    MetodoPrueba: function(){
        return 'Resultado desde Prueba';
    }
}


let result = personaA.MetodoPrueba();
console.log(result);