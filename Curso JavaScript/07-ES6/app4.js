//----------MAPS------------------


const datos = new Map();

datos.set('nombre', 'Bastian');
datos.set('edad', 30);
datos.set(1, 'correo@mail.com');
datos.set(2, 'correo@mail.con');
datos.set('movil', 99999999);


console.log(datos.get('nombre'));
console.log(datos.get(2));
console.log(datos.size);

//datos.delete(2);
//datos.clear();

datos.forEach((value, key) =>{
    console.log(`${key}`, `${value}`);
})