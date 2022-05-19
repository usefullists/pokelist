<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import "../app.scss";
</script>

<SvelteTheme attribute="class" />
<Header />
<main class="mt-5 md:mt-16" transition:fade>
	<slot />
</main>
<Footer />

