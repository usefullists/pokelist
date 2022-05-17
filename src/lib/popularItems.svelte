<script>
	import PopularItem from './popularItem.svelte';
	export let pokemons;
	export let limit;
	export let search;
	let searchTerm = '';
	let filteredItems = [];
	let noElements = false;

	$: {
		if (pokemons) {
			if (searchTerm) {
				filteredItems = pokemons.filter((item) =>
					item.name.toLowerCase().includes(searchTerm.toLowerCase())
				);
			} else {
				filteredItems = [...pokemons];
			}
		} else {
      noElements = true;
    }
	}
</script>

<div class="bg-indigo-50 dark:bg-indigo-900 {search == true ? 'search':'no-search'}">
	<div class="md:py-24 md:my-20 popular-items container flex flex-wrap justify-between py-8 my-10">
		<div
			class="prose-p:text-gray-600 sm:w-7/12 md:w-6/12 lg:prose-xl prose-a:text-blue-900 prose-h4:text-blue-900 dark:prose-invert dark:prose-a:text-indigo-200 dark:prose-h4:text-indigo-200 dark:prose-p:text-gray-300 order-1 w-full prose"
		>
			<h4>First {limit} popular</h4>
			<h2>Pokémons</h2>
		</div>
		{#if !search}
			<div
				class="sm:mt-auto sm:justify-end sm:w-3/12 sm:order-2 flex items-end justify-center order-3 w-full mt-6"
			>
				<a href="/popular" class="button sm:w-auto w-full">Show all</a>
			</div>
		{/if}
		{#if search && noElements==false}
			<div class="w-full sm:order-3 order-2 mt-8">
				<input class="form-input" type="text" placeholder="Search Item" bind:value={searchTerm} />
			</div>
		{/if}
		<div
			class="items sm:order-4 lg:grid-cols-3 lg:gap-6  cards grid order-2 w-full grid-cols-2 gap-4 mt-8"
		>
			{#if filteredItems.length > 0}
				{#each filteredItems as item, index}
					{#if index < limit}
						<PopularItem {item} />
					{/if}
				{/each}
      {:else if noElements}
        <p>No items.</p>
			{:else}
				<p>No results for query <i>{searchTerm}</i>.</p>
			{/if}
		</div>
	</div>
</div>

<style global>
  .search .items{
    @apply md:mt-8;
  }
  .no-search .items{
    @apply md:mt-14;
  }
</style>
