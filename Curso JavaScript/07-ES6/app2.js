//FUNCIONES FLECHA

const years = [2000, 2005, 2008, 2012];

//ES5
var edad5 = years.map(function(el){
    return 2023 - el;
});

console.log(edad5);

//ES6

let edad6 = years.map(el =>  2023 - el);
console.log(edad6);


edad6 = years.map((el, index) => `Edad ${index + 1}: ${2023 - el}`);
console.log(edad6);


edad6 = years.map(
    (el,index) => {
        const yearActual = new Date().getFullYear();
        const edad = yearActual - el;
        return `Edad ${index + 1}: ${edad}`;
    }
)

console.log(edad6);


//Funcion ES5
function cuadrado(num){
    return num * num;
}

console.log(cuadrado(5));

//Funcion ES6

const cuadradoES6 = (numES6) => {
    return numES6 * numES6;
}

console.log(cuadradoES6(3));


const personas = [
    {
        nombre: 'Pablo',
        edad: 25
    },
    {
        nombre: 'Fernando',
        edad: 36
    },
    {
        nombre: 'Angie',
        edad: 18
    },
]

//Buscar los menores a 30
/*
const menores30 = personas.filter(function(personas){
    return personas.edad < 30;
});

console.log(menores30);
*/
//Buscar los menores a 30 con ES6

const menores30 = personas.filter((personas) => personas.edad < 30);

console.log(menores30);