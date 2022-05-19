<script context="module">
	export async function load({ fetch, params }) {
		const limit = 700;
		//pokeapi call (get pokemons)
		const url = `https://pokeapi.co/api/v2/pokemonwww?limit=${limit}`;
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			const results = data.results;
			let pokemons = [];
			//map pokemons id
			const arr = [...Array(results.length).keys()].map((i) => i + 1);
			//pokeapi call (get individual pokemon)
			for (let id of arr) {
				const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
					.then((response) => response.json())
					.catch((error) => console.error(error));
				pokemons.push(pokemon);
			}
			pokemons = await Promise.all(pokemons);
			return {
				status: response.status,
				props: { pokemons }
			};
		} else {
			return {
				status: response.status,
				error: new Error('Could not fetch Pokémons')
			};
		}
	}
</script>

<script>
	import TableItems from '$lib/tableItems.svelte';
	export let pokemons;
</script>

<svelte:head>
	<title>Pokémon list</title>
</svelte:head>
<div class="container">
	<div class="prose prose-gray lg:prose-lg dark:prose-invert mb-14">
		<h1>Pokémon list</h1>
	</div>
</div>
<TableItems search={true} pagination={true} {pokemons} />
