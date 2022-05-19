<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<div class="container max-w-xl mx-auto prose">
	<h1>Ooops, something is not ok 🙊</h1>
	<p>
		Status: <strong>{status} </strong><br />
		{error.message}
	</p>

	<p class="flex mt-4">
		<a href="/" class="button no-underline">Go back home</a>
	</p>
</div>
