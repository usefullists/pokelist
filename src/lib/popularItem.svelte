<script>
	import { fade } from 'svelte/transition';
	export let item;
</script>

<a
	href={`/item/${item.id}`}
	class="hover:bg-indigo-100 dark:bg-indigo-500 flex flex-wrap p-3 sm:p-5 bg-white rounded-sm shadow-md"
	transition:fade
>
	<div class="md:w-1/3 w-full flex justify-center">
		<img class="image rounded-md h-20" src={item.sprites.other.home.front_default} alt={item.name} />
	</div>
	<div class="md:mt-0 md:pl-5 md:w-2/3 w-full mt-2 prose prose-xs sm:prose-base">
		<h4 class="mb-1 capitalize">{item.name}</h4>
		<div class="dark:text-indigo-200 text-xs sm:text-sm text-gray-500">
			<span class="font-bold">Abilities:</span><br>
			{#each item.abilities as { ability }, i}
				{#if i + 1 < item.abilities.length}
					{ability.name}<span>, </span>
				{:else}
					{ability.name}
				{/if}
			{/each}
		</div>
	</div>
</a>
