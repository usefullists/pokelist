// @ts-nocheck
import { writable } from "svelte/store";

export let pokemons = writable([]);

const fetchPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=200";
  const res = await fetch(url);
  const data = await res.json();
  
  const loadedPokemon = data.results.map((data, index) => {
    return {
      name: data.name,
      id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index + 1}.png`,
      }
    });  
  pokemons.set(loadedPokemon);
};

fetchPokemon();

const fetchPokemonDesc = async (id) => {
  const url = `https://pokeapi.co/api/v2/characteristic/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(id);
  // console.log(data.descriptions[7].description);
  // Object.entries(data).forEach(([key, value]) => {
  //   console.log(`${key}: ${value}`);
  // });
  // return data.descriptions[7].description;
  return 'Loves :)'
};

// fetchPokemonDesc(1)