// Spread Operator (Operador de propagacion)

var suma = function(a , b, c, d){

    return a+b+c+d;
}

var op1 = suma(10,20,30,40);
console.log(op1);

var valores = [10,20,30,40];
var op2 = suma(...valores);

console.log(op2);

const rrhh = ['Pedro', 'Pablo', 'Ana'];
const contabilida = ['Felipe', 'Carlos', 'Maria'];

const empresa = [...rrhh, ...contabilida];
console.log(empresa);
