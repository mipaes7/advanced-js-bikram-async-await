//DESARROLLA AQUI TUS SOLUCIONES

const getRandomPokemon = async () => {

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await resp.json();
    const random = Math.floor(Math.random() * data.count);
    const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    const data2 = await resp2.json();
    return data2;
}

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

const printImageAndName = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await resp.json();
    const random = Math.floor(Math.random() * data.count);
    const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    const data2 = await resp2.json();
    console.log(data2);
    return `<section><img src="${data2.sprites.front_default}" alt="${data2.name}"><h1>${data2.name}</h1></section>`;
}


const getRandomDogImage = async () => {
    const resp = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await resp.json();
    return data.message;
}


const getRandomPokemonImage = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await resp.json();
    const random = Math.floor(Math.random() * data.count);
    const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    const data2 = await resp2.json();
    return data2.sprites.front_default;
}

const getRandomCharacter = async () => {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    const data = await resp.json();
    console.log(data);
    const random = Math.floor(Math.random() * data.info.count);
    const resp2 = await fetch(`https://rickandmortyapi.com/api/character/${random}/`);
    const data2 = await resp2.json();
    return data2;
}

// const getRandomCharacterInfo = async () => {
//     const resp = await fetch('https://rickandmortyapi.com/api/character');
//     const data = await resp.json();
//     console.log(data);
//     const random = Math.floor(Math.random() * data.info.count);
//     const resp2 = await fetch(`https://rickandmortyapi.com/api/character/${random}/`);
//     const data2 = await resp2.json();
//     console.log(data2);
//     const name = data2.name;
//     const img = data2.image;
//     const episode = data2.image;
//     const resp3 = await fetch('https://rickandmortyapi.com/api/episode');
//     const data3 = await resp3.json();
//     console.log(data3);
// }