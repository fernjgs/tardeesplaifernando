const miPerro = {
    colas: 1,
    piernas: 4,
    amigos: 2
};

console.log(miPerro.colas);
console.log(miPerro.piernas);
console.log(miPerro.amigos);






// const testObj = {
//     "ojos": 2,
//     "nombre": "Pablo",
//     "piernas": 2
// };

// // Sólo hay que hacer modificaciones por debajo de esta línea 
// const ojos = testObj.ojos;      // Cambiar esta línea
// const nombre = testObj.nombre;    // Cambia esta línea

// console.log(testObj.ojos); // Debería mostrar: 2
// console.log(testObj.nombre); // Debería mostrar: "Pablo"




const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"





const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

myDog.nombre = 'HappyCoder'
console.log(myDog.nombre); // Debería mostrar: "HappyCoder"





function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    // Sólo cambia el código por encima de esta línea
    return lookup[val];

}


// Sólo cambia el código por encima de esta línea

const value = phoneticLookup("charlie")
console.log(value); // Chicago





const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },

    {
        "artista": "Pepe",
        "titulo": "Pepegod",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    }
];

console.log(myMusic[0].artista)
console.log(myMusic[0].formatos[0], myMusic[1].formatos[1])




const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box']; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"




const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]







// const users = [
//     {
//         "name": "Paco",
//         "isActive": false,
//         "age": 18
//     },
//     {
//         "name": "Laura",
//         "isActive": false,
//         "age": 21
//     },
//     {
//         "name": "Raquel",
//         "isActive": false,
//         "age": 15
//     },
//     {
//         "name": "Juan",
//         "isActive": true,
//         "age": 17
//     },
//     {
//         "name": "Alberto",
//         "isActive": false,
//         "age": 50
//     },
//     {
//         "name": "Rodolfo",
//         "isActive": true,
//         "age": 7
//     },
// ];

// const choosedUser = users.find(users => users.name === 'Juan').age; // Modifica esta línea para resolver el ejercicio

// console.log(choosedUser); // Debería mostrar: 17

const users = [
    {
        "name": "Paco",
        "isActive": false,
        "age": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "age": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "age": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "age": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "age": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "age": 7
    },
];

const olderUsers = users.filter(user => user.age > 18);
console.log(olderUsers)




const numbers = [1, 2, 3];
const result = numbers.reduce((acc, number) => acc + number, 0) / numbers.length;

console.log(result);










let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    // const r = ...
    // console.log('getWomansName(): ' , r);
}

fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(characters);
        getWomansName();
    });