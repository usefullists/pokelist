<script context="module">
	export const load = async ({ fetch, params }) => {
		const limit = 1000;
		const pokemons = await fetch(`./pokeapi.json?limit=${limit}`).then((response => response.json()))
		return {
			props: {
				pokemons: pokemons.pokemons,
				limit
			}
		}
	}
</script>

<script>
	import ContentCard from '$lib/content/contentCard.svelte';
	import PopularItems from '$lib/popularItems.svelte';
	import TableItems from '$lib/tableItems.svelte';
	export let pokemons;
	export let limit;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<ContentCard />
<PopularItems limit="{limit}" search={false} {pokemons} />
<TableItems search={false} {pokemons} />
