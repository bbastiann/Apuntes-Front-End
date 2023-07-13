/********
 * CreateElement
 */
//tagName

var nuevoDiv = document.createElement('div');
nuevoDiv.className = 'hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title','Hola Mundo');


/*********
 * createTextNode
 */
var nuevoNodoText = document.createTextNode('Hola Mundo');
nuevoDiv.appendChild(nuevoNodoText); //Agregamos el nuevo nodo

console.log(nuevoDiv);

var contenedor = document.querySelector('.container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);

contenedor.insertBefore(nuevoDiv,h1);