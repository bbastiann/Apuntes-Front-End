//Agregar Elementos a la Lista
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');

var filto = document.getElementById('filtro');

//Evento Submit del Formulario
form.addEventListener('submit',agregarItem);

//Evento Click de la Lista
lista.addEventListener('click', eliminarItem);

//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItems);

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


//Funciones para Filtrar elementos de la Lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase()
    var items = lista.getElementsByTagName('li');

    Array.from(items).forEach(function(item){

        var itemNombre = item.firstChild.nodeValue;

        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

    console.log(items);
}