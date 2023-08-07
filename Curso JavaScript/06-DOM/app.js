/*************
 * Examinando el DOM
 */

//console.log(document); //Visualizar todo lo que hay en nuestro HTML
/*console.log(document.title); //Ver titulo
document.title = 'Prueba'; //Puedo cambiar el titulo de que se ve
console.log(document.title);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.images);*/



//getElementById
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
console.log(header);

//Manipulacion de variables
headerTitle.textContent = 'Hola'; //Cambiar texto por HOLA
headerTitle.innerText = 'Adios'; //Cambiar texto por Adios

headerTitle.innerHTML = '<h3>Pruebas</h3>';

//Los ID son Unicos eso quiere decir que te retornara el primer elemento
//que Encuentre con ese ID

//getElementsByClassName
var items = document.getElementsByClassName('list-group-item');
console.log(items[3]);
items[0].textContent = 'Prueba';

//Podemos obtener de retorno muchos elementos con los que podremos interactuar



//getElementsByTagName
var items2 = document.getElementsByTagName('li'); 
items2[0].textContent = 'Prueba02';
//Retornara todos los elementos que tengan esa etiqueta

//querySelector
//Permite seleccionar el primer elemento de acuerdo a algun parametro que le pasemos
//ya sea un clase, ID o etiqueta (tambien sirve con CSS).

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'HOLA MUNDO';

var input2 = document.querySelector('input[type ="submit"]');
input2.value = 'ENVIAR';

//querySelectorAll
//Selecciona todos los elementos y los guarda en un array

var items = document.querySelectorAll('.list-group-item');
items[0].style.color = 'red';
items[1].style.color = 'yellow';
items[2].style.color = 'blue';
items[3].style.color = 'green';


var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[0].textContent = 'Pruebas';


var impar = document.querySelectorAll('li:nth-child(odd)')
var par = document.querySelectorAll('li:nth-child(even)')
for(var i = 0; i < impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
}

//ParentNode
/*
var itemList = document.querySelector('#items');
console.log('ParentNode ');
console.log(itemList.parentNode);
var main = itemList.parentNode;
main.style.backgroundColor = '#f4f4f4';
console.log(main.parentNode.parentNode);
*/

//ParentElement
var itemList2 = document.querySelector('#items');
console.log('ParentElement ');
console.log(itemList2.parentElement);
var main2 = itemList2.parentElement;
main2.style.backgroundColor = '#f4f4f4';
console.log(main2.parentElement.parentElement);


/*
//------------------------ParentNode y ParentElement:

En JavaScript, tanto parentNode como parentElement son propiedades que se utilizan para
acceder al nodo padre de un elemento en el árbol DOM (Document Object Model). 
Sin embargo, hay una diferencia clave entre ellos:

parentNode: Esta propiedad devuelve el nodo padre del elemento, independientemente de qué tipo de nodo sea. 
Es decir, puede ser cualquier tipo de nodo, como un elemento, un texto, un comentario, etc. Si el elemento no tiene un nodo padre, 
parentNode devolverá null.

parentElement: Esta propiedad devuelve el elemento padre del elemento. Dicho de otra manera, solo se aplica a los nodos de tipo elemento. 
Si el nodo padre es de un tipo diferente (como un nodo de texto o un comentario), se omite y se busca el siguiente nodo padre que sea de tipo elemento. 
Si no hay un nodo padre de tipo elemento, parentElement devuelve null.

*/


//----------------Elementos y Nodos Hijos
var itemList3 = document.querySelector('#items');

//ChildNodes
console.log("ChildNodes");
//console.log(itemList3.childNodes);

//Children
console.log("Children");
//console.log(itemList3.children);

//fistChild / firstElementChild
console.log("fistChild / firstElementChild");
//console.log(itemList3.firstElementChild);

//lastChild / lastElementChild
console.log("lastChild / lastElementChild");
//console.log(itemList3.lastElementChild);


//------------------Elementos Hermanos
var itemList4 = document.querySelector('#items');

//previousSibling
console.log(itemList4.previousSibling)
//previousElementSibling
console.log(itemList4.previousElementSibling)
//nextSibling
console.log(itemList4.nextSibling)
//nextElementSibling
console.log(itemList4.nextElementSibling)



//Agregar Eventos
/*
document.getElementById('boton').addEventListener('click', function(){
    console.log('Usted le ha dado click');
});*/

//O se puede hacer de la siguiente forma

document.getElementById('boton').addEventListener('click', HacerClick);

function HacerClick(){
    //console.log('Usted le ha dado click');
    document.getElementById('header-title').textContent = 'Texto Cambiado';
}
