<script context="module">
	export async function load({ fetch, params }) {
		const limit = 700;
		//pokeapi call (get pokemons)
		const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
		const response = await fetch(url);
		const data = await response.json();
		let pokemons = [];
		if (response.ok) {
			const results = data.results;
			

	
			//map pokemons id
			let arr = [...Array(results.length).keys()].map((i) => i + 1);
			//pokeapi call (get individual pokemon)
			for (let id of arr) {
				let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
					.then((response) => response.json())
					.catch((error) => console.log(error));
				pokemons.push(pokemon);
			}
			pokemons = await Promise.all(pokemons);
			// if (response.status == 200) {
				
			// }
		}
		return {
					status: response.status,
					props: { pokemons }
				};
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
