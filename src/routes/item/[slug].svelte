<script context="module">
	export async function load({ fetch, params }) {
		const url = `https://pokeapi.co/api/v2/pokemon/${params.slug}`;
		const response = await fetch(url);
		const data = await response.json();

		return {
			status: response.status,
			props: {
				item: response.ok && data
			}
		};
	}
</script>

<script>
	import { goto, afterNavigate } from '$app/navigation';
	let previousPage = "/collectables";
	afterNavigate((navigaton) => {
		if(navigaton.from.pathname) previousPage = navigaton.from.pathname;
		else previousPage = "/collectables"
	});
	export let item;
</script>

<div class="container prose dark:prose-invert">
	<a href="{previousPage}" class="cursor-pointer text-indigo-700 flex items-center dark:text-indigo-300"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
		<path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
	</svg>All collectables</a>
	<h1 class="capitalize mt-4">{item.name}</h1>
	<div class="flex items-center flex-wrap">
		<div class="flex sm:w-1/3">
			<img class="sm:pr-6" src={item.sprites.other.home.front_default} alt={item.name} />
		</div>
		<div class="sm:w-2/3">
			<div class="value"><strong>Height:</strong> {item.height}</div>
			<div class="value"><strong>Weight:</strong> {item.weight}</div>
			<div class="value"><strong>Base experience:</strong> {item.base_experience}</div>

			<div class="value">
				<strong>Moves:</strong>
				<div class="leading-tight">
					{#each item.moves as item, index}
						{#if index < 20}
							<span class="mr-1 inline-flex">{item.move.name},</span>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div>
		<h3>Variants:</h3>
		<div class="flex flex-wrap items-start not-prose -mx-1 md:-mx-2">
			<div class="image-item"><img src={item.sprites.front_default} alt={item.name} /></div>
			<div class="image-item"><img src={item.sprites.back_default} alt={item.name} /></div>
			<div class="image-item"><img src={item.sprites.front_shiny} alt={item.name} /></div>
			<div class="image-item"><img src={item.sprites.back_shiny} alt={item.name} /></div>
			<div class="image-item">
				<img src={item.sprites.other.dream_world.front_default} alt={item.name} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.value:not(:last-child) {
		@apply border-b border-gray-100 pb-3 mb-3;
	}
	.image-item {
		@apply md:w-1/5 p-1 md:p-2;
		img {
			@apply p-2 m-0 shadow-sm rounded-sm hover:bg-indigo-50 text-center border border-gray-100 dark:hover:bg-indigo-400 dark:border-indigo-900 h-16 w-16 sm:h-20 sm:w-20 sm:h-20 md:h-28 md:w-28;
		}
	}
</style>
