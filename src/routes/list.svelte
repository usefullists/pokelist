
<script context="module">
	export const load = async ({ fetch }) => {
		const pokemons = await fetch('./pokeapi.json?limit=400').then((response => response.json()))
		return {
			props: {
				pokemons: pokemons.pokemons
			}
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
