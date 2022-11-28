const personas = [
    { nombre: "Juan", edad: 18 },

    { nombre: "María", edad: 16 },

    { nombre: "Pedro", edad: 20 },

    { nombre: "Pablo", edad: 15 },

    { nombre: "Laura", edad: 19 },
];

function mayoresDeEdad(personas) {
    const mayores = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad >= 18) {
            mayores.push(personas[i]);
        }
    }
    return mayores;
}

console.log(mayoresDeEdad(personas));
