/******
 * OBJETOS
 */

let miLibroA = {
    titulo: "El libro de JavaScript",
    autor:"Grover Pablo Vásquez",
    paginas: 400,
    publicado: false
}

let miLibroB = {
    titulo: "Piense y Hagase Rico",
    autor:"Napoleon Hill",
    paginas: 500,
    publicado: true
}

console.log(miLibroA.publicado);
console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);
miLibroA.paginas = 500;
console.log(miLibroA.paginas);

let getResumen = (libro) =>{
    return{
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
    }
}

let libroAResumen = getResumen(miLibroA);
let libroBResumen = getResumen(miLibroB);


console.log(libroBResumen.resumen);
console.log(libroBResumen.resumenPaginas);


/*********
 *Crear un Objeto persona con las siguientes propiedades.
 nombre, edad, Ciudad
 cambiar la edad
 Mostrar datos de la persona
 */

 /*let persona = {
    nombre: "Fernando Gutierritos",
    edad: 25,
    ciudad: "Santiago",
 }

 console.log(persona.edad);

 persona.edad = 30;

 console.log(persona.edad);*/