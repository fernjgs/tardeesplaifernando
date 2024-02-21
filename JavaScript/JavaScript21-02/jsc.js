const txt1 = 'este es el principio'
const txt2 = 'este es el final'
const txt3 = txt1 + ' ' + txt2
console.log(txt3)



const euros = 7
const dolares = 7 * 2
console.log(dolares)



const precio = 100;
const precioConIva = precio * 1.21// Modificar sólo esta línea
console.log(precioConIva); // Debería mostrar 121



const ancho = 4
const alto = 7
const area = ancho * alto / 2
console.log(area)



const centigrados = 20;
const fahrenheit = centigrados * (9 / 5) + 32// Modificar sólo esta línea
console.log(fahrenheit); // Debería mostrar 68



const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
const frase = nombre + ' ha pedido una caja de ' + material + ' con unas dimensiones ' + dimensiones + comentario;
console.log(frase)



let myyVar = 87;
myyVar++;// Modificar esta línea
console.log(myyVar); // 88



let myVar = 11;
myVar--; // Modificar esta línea
console.log(myVar); // 10



let x = 3;
x++;
x = x * 2;
x--;
console.log(x); // ¿Cuánto valdrá x?



const dato1 = 10;
const dato2 = 10;
if (dato1 == dato2) {
    console.log('exito');
}



if (10 == 10) {
    console.log('You got a true!')
} else {
    console.log('You got a false!')
}


const nota = 10;
if (nota > 5) {
    console.log('Aprobado')
}
else if (nota == 5) {
    console.log('Aprobado por los pelos')
}
else if (nota < 5) {
    console.log('Suspenso')
}



const i = 200;
if (i >= 0) {
    console.log('Es positivo')
}
else if (i < 0) {
    console.log('Es negativo')
}
if (i % 2 === 0) {
    console.log('Es par')
}
else if (i % 2 != 0) {
    console.log('Es Impar')
}
if (i % 5 === 0) {
    console.log('Es multiplo de 5')
}
else if (i % 5 != 0) {
    console.log('No es multiplo de 5')
}
if (i % 10 === 0) {
    console.log('Es multiplo de 10')
}
else if (i % 10 != 0) {
    console.log('No es multiplo de 10')
}
if (i > 100) {
    console.log('Mayor que 100')
}
else if (i < 100) {
    console.log('Menor que 100')
}



const n1 = 3;
const n2 = 4;
const op = '*';
if (op === '*') {
    console.log(n1 * n2)
}
else if (op === '+') {
    console.log(n1 + n2)
}
else if (op === '-') {
    console.log(n1 - n2)
}
else if (op === '/') {
    console.log(n1 / n2)
}



const b = 7;
console.log(b > 0 ? 'Es positivo' : 'Es negativo')


const k = 10;
console.log(i % 2 === 0 ? 'Es par' : 'Es impar')



const color = 'azul';
switch (color) {
    case 'rojo':
        console.log('Has escogido rojo');
        break;
    case 'azul':
        console.log('Has escogido azul');
        break;
    case 'amarillo':
        console.log('Has escogido amarillo');
    default:
        console.log('No has escogido ningún color de la lista!');
}



const golosina = 'nubes';

switch (golosina) {
    case 'chicle':
        console.log('Has escogido un chicle');
        break;
    case 'gominola':
        console.log('Has escogido una gominola');
        break;
    case 'regaliz':
        console.log('Has escogido un regaliz');
        break;
    default:
        console.log('No has escogido ninguna golosina de la lista');
}



for (let i = 0; i <= 100; i = i + 2) {
    console.log(i);
}



for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0)
        console.log(i);
}




for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0)
        console.log(i)
}

