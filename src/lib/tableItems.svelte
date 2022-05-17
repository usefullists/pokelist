<script>
	import { paginate, PaginationNav } from 'svelte-paginate';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	export let pokemons;
	export let search;
	export let pagination;
	let searchTerm = '';
	let filteredItems = [];
	$: {
		if (searchTerm) {
			filteredItems = pokemons.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			currentPage = 1;
		} else {
			filteredItems = [...pokemons];
		}
	}

	let currentPage = 1;
	let pageSize = 50;
	let items = [];
	let paginatedItems = [];
	$: {
		items = filteredItems;
		currentPage = currentPage;
		pageSize = pageSize;
		paginatedItems = paginate({ items, pageSize, currentPage });
	}
</script>

<div class="container {search == true ? 'search' : 'no-search'}">
	{#if search != false}
		<div class="w-full sm:order-3 order-2 md:mt-8">
			<input class="form-input" type="text" placeholder="Search Item" bind:value={searchTerm} />
		</div>
	{/if}
	{#if paginatedItems.length > 0}
		<div class="flex flex-col mt-6">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full py-1">
					<div class="overflow-hidden relative z-0 pb-3">
						<table>
							<thead>
								<tr>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-10"> # </th>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-24"> Photo </th>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-1/12"> Name </th>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-1/12">
										Base experience
									</th>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-2/12"> Abilities </th>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-2/12"> Types </th>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-2/12"> Held items </th>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-1/12">
										Weight <i>(hectograms)</i></th
									>
									<th scope="col" class="px-3 py-2 text-sm font-medium text-left w-1/12">
										Height <i>(decimetres)</i></th
									>
								</tr>
							</thead>
							<tbody>
								{#each paginatedItems as item, index}
									<tr on:click={() => goto(`/item/${item.id}`)} transition:fade class="table-tr">
										<td class="table-td">{item.id}</td>
										<td class="table-td-image w-1/12">
											<img
												class="image"
												src={item.sprites.other.home.front_default}
												alt={item.name}
												loading="lazy"
											/>
										</td>
										<td class="table-td capitalize font-medium w-1/12">
											{item.name}
										</td>
										<td class="table-td w-1/12">
											{item.base_experience}
										</td>
										<td class="table-td w-2/12">
											{#each item.abilities as { ability }, i}
												{#if i + 1 < item.abilities.length}
													{ability.name}<span>, </span>
												{:else}
													{ability.name}
												{/if}
											{/each}
										</td>
										<td class="table-td w-2/12">
											{#each item.types as { type }, i}
												{#if i + 1 < item.types.length}
													{type.name}<span>, </span>
												{:else}
													{type.name}
												{/if}
											{/each}
										</td>
										<td class="table-td w-2/12">
											{#if item.held_items.length > 0}
												{#each item.held_items as held_item, i}
													{#if i + 1 < item.held_items.length}
														{held_item.item.name}<span>, </span>
													{:else}
														{held_item.item.name}
													{/if}
												{/each}
											{:else}
												/
											{/if}
										</td>
										<td class="table-td w-1/12">
											{item.weight} <i>hg</i>
										</td>
										<td class="table-td w-1/12">
											{item.height} <i>dc</i>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		{#if pagination}
			<PaginationNav
				totalItems={items.length}
				{pageSize}
				{currentPage}
				limit={1}
				showStepOptions={true}
				on:setPage={(e) => (currentPage = e.detail.page)}
			/>
		{/if}
	{:else}
		<div class="mt-10 p-10 bg-indigo-50 dark:text-indigo-700 dark:bg-indigo-200">
			<p>No results for query <i>{searchTerm}</i>.</p>
		</div>
	{/if}
</div>

<style global lang="scss">
	table {
		@apply relative pb-2 z-0 table-fixed;
	}
	thead {
		@apply bg-indigo-50 text-indigo-800 border-b dark:bg-blue-900 dark:text-indigo-200 dark:border-indigo-700;
	}
	.table-tr {
		@apply hover:bg-indigo-50 transition duration-300 ease-in-out bg-white border-b relative hover:cursor-pointer dark:bg-indigo-900 dark:border-indigo-700;
		&:last-child {
			@apply pb-6 relative z-10;
		}
	}
	.table-td {
		@apply  px-3 py-4 text-sm font-light text-gray-900 dark:text-indigo-300;
	}
	.table-td-image {
		@apply h-24 w-24 flex items-center justify-center relative;
		.image {
			@apply h-20 w-20 transition duration-200 ease-in-out bg-indigo-50 rounded-full border border-indigo-100 dark:bg-blue-900 dark:border-indigo-700 hover:scale-150 hover:absolute hover:bottom-0 hover:top-2 hover:z-20 m-0;
		}
	}
</style>
