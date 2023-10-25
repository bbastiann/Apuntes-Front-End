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