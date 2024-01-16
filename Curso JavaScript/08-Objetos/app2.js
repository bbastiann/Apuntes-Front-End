//REFERENCIA DE OBJETOS
console.log("REFERENCIA DE OBJETOS");

let persona = {
    nombre: "pablo",
    edad: 27,
    sueldo: 12000000
}

let otraPersona = persona;
otraPersona.sueldo = 1500;
console.log(otraPersona);


let CambiarSueldo = (p, sueldo) =>{
    p.sueldo = p.sueldo + sueldo;
}

CambiarSueldo(persona, 5000000)
console.log(otraPersona);
console.log(persona);

console.log("Como persona y p son referencia del objeto persona, ");
console.log("todos los cambios se aplicaran a los 3 objetos por eso es mejor crear los objetos por separado.")
console.log("Como por ejemplo en el caso de miLibroA y miLibroB");