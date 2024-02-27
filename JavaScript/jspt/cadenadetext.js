const longtiud = (ana) => ana.length;

const wordLength = longtiud('ana');
console.log(wordLength);





const devuelvePrimeraLetra = (perro) => perro[1];

const primletra = devuelvePrimeraLetra('perro');
console.log(primletra)




const devuelveUltimaLetra = (Zapato) => Zapato[5];

const ultiletra = devuelveUltimaLetra('Zapato');
console.log(ultiletra)






const devuelveEnesimaLetra = (Fernando, n) => Fernando[n];

const EnesiLetra = devuelveEnesimaLetra('Fernando', 5);
console.log(EnesiLetra)




const letras = 'wonderful day'.slice(3, 7);
console.log(letras)





const devuelveMasLarga = (perro, elefante) => perro.length >= elefante.length ? perro : elefante;

const cadenaMasLarga = devuelveMasLarga('perro', 'elefante');
console.log(cadenaMasLarga);





const devuelveMasLarga2 = (c1, c2, c3) => {
    if (c1.length > c2.length && c1.lenght > c3.lenght) {
        return c1;
    } else if (c2.lenght > c1.lenght && c2.lenght > c3.lenght) {
        return c2;
    } else if (c3.lenght > c1.lenght && c3.lenght > c2.lenght) {
        return c3
    } else {
        return 'Hay al menos dos cadenas iguales';
    }

}
const cadenaMMasLarga = devuelveMasLarga2('aa', 'bbbb', 'cccc');
console.log(cadenaMMasLarga);





const generarNombre = (c1, c2, c3) => {
    if (c1.length < 5 || c2.length < 5 || c3.length < 5) {
        return 'error';
    } else {
        return c1.substring(0, 3) + c2.substring(0, 3) + c3.substring(0, 3);
    }
}

const nombre = generarNombre('perro', 'cactus', 'tomate');
console.log(nombre);




const generarNombree = (c1, c2, c3) => {
    if (c1.length < 5 || c2.length < 5 || c3.length < 5) {
        return 'error';
    } else {
        return c1.substring(c1.length - 1) + c2.substring(c2.length - 1) + c3.substring(c3.length - 1);
    }
}
const resultado = generarNombree('paloma', 'raton', 'tigre');
console.log(resultado);



const tieneLetra = (txt, letra) => txt.indexOf(letra) >= 0;

const laLetraEsta = tieneLetra('amor', 'z');
console.log(laLetraEsta);




const tieneLetre = (txt, letra) => txt.toUpperCase().indexOf(letra.toUpperCase()) >= 0;

const laLetraEste = tieneLetre('amor', 'z');
console.log(laLetraEste);



const crearPalabra = (letra, num) => {
    let palabra = '';
    for (let i = 0; i < num; i++) {
        palabra += letra;
    }
    console.log(palabra);
}
crearPalabra('a', 7);




const crearPalabra1 = (letra, num) => {
    let palabra = '';
    for (let i = 0; i < num; i++) {
        palabra += letra.toUpperCase();
    }
    console.log(palabra);
}
crearPalabra1('a', 7);




const addGuiones = (txt) => {
    let palabraCreada = '';
    for (let i = 0; i < txt.length; i++) {
        const letra = txt[i];
        palabraCreada += letra + '-';
    }
    return palabraCreada;
}

const nuevaPalabra = addGuiones('amor');
console.log(nuevaPalabra);





const contadorLetras = (txt, letra) => {
    let contadorLetras = 0;
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === letra) contadorLetras++;
    }
    return contadorLetras;
}

const cantidadLetras = contadorLetras('sabandija', 'a');
console.log(cantidadLetras);




const contadorLetras1 = (txt, letra) => {
    let contadorLetras = 0;
    for (let i = 0; i < txt.length; i++) {
        if (txt[i].toUpperCase() === letra.toUpperCase()) contadorLetras++;
    }
    return contadorLetras;
}

const cantidadLetras1 = contadorLetras1('casa', 'A');
console.log(cantidadLetras1);





const toCase = (txt) => {
    return txt.toLowerCase() + '-' + txt.toUpperCase();
}
const palabras = toCase('Pablo');
console.log(palabras);



const shortcut = (texto1, texto2) => texto1[0] + texto2[0];

const initials = shortcut('Pedro', 'Fernando')
console.log(initials)







const firstChar = (txt) => {
    return txt.trim()[0];
}

const letter = firstChar('love');
console.log(letter);






const indexOfIgnoreCase = (txt1, txt2) => {
    return txt1.toUpperCase().indexOf(txt2.toUpperCase());
}


console.log(indexOfIgnoreCase('amor', 'OR'));







const firstWord = (txt) => {
    const whiteSpacePos = txt.indexOf(' ');
    const result = txt.substring(0, whiteSpacePos);
    return result;
}

const v = firstWord("see and stop");
console.log(v);











