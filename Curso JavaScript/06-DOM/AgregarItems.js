//Agregar Elementos a la Lista
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');


form.addEventListener('submit',agregarItem);

function agregarItem(e){
    e.preventDefault(); //Permite cancelar el evento si este es cancelable, sin detener el resto del funcionanmiento del evento.
    var newItem = document.getElementById('item').value; 

    //Creamos un elemento para la lista
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //Creamos el Boton del Elemento
    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);
    console.log(li);

    lista.appendChild(li);

}