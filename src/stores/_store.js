export async function load({ params }) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=200';
  const response = await fetch(url);
  const data = await response.json();

  const loadedPokemon = data.results.map((data, index) => {
    return {
      name: data.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
        index + 1
      }.png`,
      description: `This is short description for ${data.name.toUpperCase()}. Is's score is ${index*0.5}.`,
      attribute: `${data.name} superpower ${index+1}`,
      attribute2: `${data.name} extra power ${index*.5}`
    };
  });
  return {
    status: response.status,
    props: {
      pokemons: response.ok && loadedPokemon
    }
  };
} 