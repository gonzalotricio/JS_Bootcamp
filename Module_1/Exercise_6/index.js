const pokemons = [
    {
        nombre: "Squirtle",
        tipo: "agua",
    },
    {
        nombre: "Bulbasaur",
        tipo: "planta",
    },
    {
        nombre: "Charmander",
        tipo: "fuego",
    },
];

/* if (pokemons[0].tipo === "fuego") {
    console.log("Es una pokemon de fuego!");
} else if (pokemons[1].tipo === "fuego") {
    console.log("Es una pokemon de fuego!");
} else if (pokemons[2].tipo === "fuego") {
    console.log("Es una pokemon de fuego!");
} */

pokemons.forEach((pokemon) => {
    if (pokemon.tipo === "fuego") {
        console.log(`${pokemon.nombre} ES FUEGARDO`);
    } else {
        console.log(`${pokemon.nombre} no lo és`);
    }
});
