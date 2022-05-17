<script context="module">
	export const prerender = true;
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
</script>

<script>
	import PopularItems from '$lib/popularItems.svelte';
	export let pokemons;
</script>

<svelte:head>
	<title>Poular collectables</title>
</svelte:head>
<div class="container">
	<div class="prose prose-gray lg:prose-lg dark:prose-invert">
		<h1>Popular collectables</h1>
	</div>
</div>
<PopularItems limit="100" search={true} {pokemons} />
