//Agregar Elementos a la Lista
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');

//Evento Submit del Formulario
form.addEventListener('submit',agregarItem);

//Evento Click de la Lista
lista.addEventListener('click', eliminarItem);

//Funcion para agregar un Item a la Lista
function agregarItem(e){
    e.preventDefault(); //Permite cancelar el evento si este es cancelable, sin detener el resto del funcionanmiento del evento.
    var newItem = document.getElementById('item').value; 

    //Creamos un elemento para la lista
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //Creamos el Boton del Elemento
    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);
    console.log(li);

    lista.appendChild(li);

}

//Funcion para Eliminar un Item de la Lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar'));
    var li = e.target.parentElement;
    console.log('Existe');
    console.log(li);
    lista.removeChild(li);
}