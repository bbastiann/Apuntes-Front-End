/**
 * Filtrado
 */

//Buscar una condicion que cumpla con parte del contenido del arreglo
console.log("Filtrado");

const paises = ['Colombia', 'Ecuador', 'Perú', 'España', 'Mexico'];

console.log(paises.filter(pais => pais.includes('o')));

const ceviche4 = [
    {
        codigo: 1,
        titulo: 'Pescado'
    },
    {
        codigo: 2,
        titulo: 'Mariscos',
        tipo : 'Frescos'
    },
    {
        codigo: 3,
        titulo: 'Cebolla'
    },
];


const FiltrarIngredientes = ceviche4.filter(function(ing, index){
    const ingredientes = ing.titulo.includes('e');
    return ingredientes;
})

console.log(FiltrarIngredientes);