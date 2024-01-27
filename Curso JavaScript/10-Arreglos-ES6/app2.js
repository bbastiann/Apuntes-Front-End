/*****
 * Bucle sobre Matrices 
 */


const ceviche2 = ['Pescado', 'Mariscos', 'Cebolla'];

ceviche2.splice(1,0,'limon');

ceviche2.forEach(function(item, index){
    console.log(index);
    console.log(item); 
});


/****
 * Recorrer un Arreglo
 */

for(let i = 0; i < ceviche2.length; i++){

    console.log(`Indice ${i}: ${ceviche2[i]}`);
};

/**
 * Busqueda de elementos
 */

console.log(ceviche2.indexOf('Cebolla')); //Me devuelve el indice donde se encuentra el dato

const ceviche3 = [
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

console.log(ceviche3.indexOf('Pescado')); //Devolvera un -1 ya que no encuentra el objeto

//Para encontrar el indice utilizaremos el metodo findIndex();

console.log("Entrar indice con findIndex()");

const index = ceviche3.findIndex(function(ingrediente, index){
    return ingrediente.titulo === 'Mariscos';
});

console.log(index);


/**
 * Ampliando Busqueda con una funcion
 */

const BuscarIngediente = function(ceviche3, titulo){
    const index = ceviche3.findIndex(function(ingrediente, index){
        return ingrediente.titulo === titulo
    });

    return index;
};

console.log(BuscarIngediente(ceviche3, 'Mariscos'));
console.log(ceviche3[BuscarIngediente(ceviche3, 'Mariscos')]);
