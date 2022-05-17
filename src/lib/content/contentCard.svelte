<script>
	import image from './content-card-img.png';
</script>

<section class="container flex flex-col items-center justify-between sm:flex-row">
	<div
		class="w-full prose prose-p:text-gray-600 sm:w-7/12 md:w-6/12 lg:prose-xl prose-a:text-blue-900 prose-h4:text-blue-900 dark:prose-invert dark:prose-a:text-indigo-200 dark:prose-h4:text-indigo-200 dark:prose-p:text-gray-300"
	>
		<h4 class="">What is this page?</h4>
		<h2>Your favourite Pokémons at one place</h2>
		<p>
			PokéList is an opensource project made for previewing Pokémons, provided by <a
				href="https://pokeapi.co/"
				target="blank">PokéAPI</a
			>. Project is build with
			<a href="https://kit.svelte.dev/" target="blank">SvelteKit framework</a>
			and styled with <a href="https://tailwindcss.com/" target="blank">Tailwind CSS</a>. Source code
			is visible on
			<a href="https://github.com/usefullists/pokelist" target="blank">Github</a>.
		</p>
	</div>
	<div class="w-3/12 mt-4 sm:w-4/12 md:w-5/12 sm:mt-0">
		<img class="image" src={image} alt="Pokémons" />
	</div>
</section>
