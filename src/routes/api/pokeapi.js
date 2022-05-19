export async function get(page) {
  //pokeapi search limit
  const limit = page.url.searchParams.get('limit') || '15';
  //pokeapi call (get pokemons)
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    const results = data.results;
    let pokemons = [];
    //map pokemons id
    let arr = [...Array(results.length).keys()].map(i => i + 1);
    //pokeapi call (get individual pokemon)
    for (let id of arr) {
      let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error));
      pokemons.push(pokemon);
    }
    pokemons = await Promise.all(pokemons);
    if (response.status == 200) {
      return {
        status: response.status,
        body: { pokemons }
      }
    }
  } else {
    return {
      status: response.status,
      error: new Error('Could not fetch Pokémons')
    };
  }
}
