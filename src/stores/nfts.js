// @ts-nocheck
import { writable } from "svelte/store";

export const nfts = writable([]);


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const fetchNFTs = async () => {
  const apiKey = "rxMX5ufNGoca0zEem-thfBRTCpQdJP0Y"
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`;
  const ownerAddr = "0xfAE46f94Ee7B2Acb497CEcAFf6Cff17F621c693D";
  const contractAddr = "0x34d77a17038491a2a9eaa6e690b7c7cd39fc8392";
  const fetchURL = `${baseURL}?owner=${ownerAddr}&withMeta=true`;

  const allData = await fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
  // const lodedNFTs = allData.map();
  nfts.set(allData);
}

// const fetchPokemon = async () => {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
//   const res = await fetch(url);
//   const data = await res.json();
//   const loadedPokemon = data.results.map((data, index) => {
//     return {
//       name: data.name,
//       id: index + 1,
//       image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index + 1}.png`,
//     }
//   })
//   nfts.set(loadedPokemon);
// }



fetchNFTs();


