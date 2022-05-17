<script>
	import { page } from '$app/stores';
	import themeStore, { setTheme } from 'svelte-themes';
	import logo from './logo.svg';
	import logoMobile from './logo-mobile.svg';
	import logoDark from './logo_dark.svg';
	import logoMobileDark from './logo-mobile_dark.svg';

	let logoAlt = 'Pokémon list';

	function toggleTheme() {
		if ($themeStore.theme == 'dark') setTheme('light');
		else setTheme('dark');
	}
	function openHamburgerMenu() {
		let id = 'mobileMenu';
		let element = document.getElementById(id);
		element.classList.add('opened');
	}
	function closeHamburgerMenu() {
		let id = 'mobileMenu';
		let element = document.getElementById(id);
		element.classList.remove('opened');
	}
</script>

<header>
	<div class="relative">
		<div class="container mx-auto">
			<div
				class="md:py-6 dark:border-indigo-900 md:space-x-10 flex items-center justify-between py-6 border-b border-gray-200"
			>
				<div class="lg:w-0 lg:flex-1 flex items-end justify-start mt-auto">
					<a href="/">
						<span class="sr-only">{logoAlt}</span>
						{#if $themeStore.theme == 'dark'}
							<img class="sm:h-12 w-auto h-8" src={logoDark} alt={logoAlt} />
						{:else}
							<img class="sm:h-12 w-auto h-8" src={logo} alt={logoAlt} />
						{/if}
					</a>
				</div>

				<div class="md:hidden -my-2 -mr-2">
					<button
						type="button"
						class="dark:bg-indigo-200 dark:text-indigo-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md"
						aria-expanded="false"
						on:click={openHamburgerMenu}
					>
						<span class="sr-only">Open menu</span>
						<!-- Heroicon name: outline/menu -->
						<svg
							class="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<div class="md:flex flex-col hidden">
					<nav class="md:flex items-center hidden space-x-10">
						<a
							href="/"
							class:active={$page.url.pathname === '/'}
							class="hover:text-indigo-600 dark:text-indigo-200 dark:hover:text-indigo-300 text-base font-medium"
							sveltekit:prefetch
							>
							Home
						</a>
						<a
							href="/list"
							class:active={$page.url.pathname === '/list'}
							
							class="hover:text-indigo-600 dark:text-indigo-200 dark:hover:text-indigo-300 text-base font-medium"
							sveltekit:prefetch
							>
							List
						</a>
						<a
							href="/about"
							class:active={$page.url.pathname === '/about'}
							class="hover:text-indigo-600 dark:text-indigo-200 dark:hover:text-indigo-300 text-base font-medium"
							sveltekit:prefetch
							>
							About
						</a>
						<div class="toggle-theme dark:border-indigo-800 flex pr-6 border-r">
							<button
								on:click={toggleTheme}
								class="hover:bg-indigo-300 flex items-center justify-center p-3 text-indigo-600 bg-indigo-200 rounded-full"
							>
								{#if $themeStore.theme == 'dark'}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								{/if}
							</button>
						</div>
						<a href="https://github.com/usefullists/pokelist" target="blank">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.81 3.435 22.295 8.205 23.885C8.805 23.99 9.03 23.63 9.03 23.315C9.03 23.03 9.015 22.085 9.015 21.08C6 21.635 5.22 20.345 4.98 19.67C4.845 19.325 4.26 18.26 3.75 17.975C3.33 17.75 2.73 17.195 3.735 17.18C4.68 17.165 5.355 18.05 5.58 18.41C6.66 20.225 8.385 19.715 9.075 19.4C9.18 18.62 9.495 18.095 9.84 17.795C7.17 17.495 4.38 16.46 4.38 11.87C4.38 10.565 4.845 9.485 5.61 8.645C5.49 8.345 5.07 7.115 5.73 5.465C5.73 5.465 6.735 5.15 9.03 6.695C9.99 6.425 11.01 6.29 12.03 6.29C13.05 6.29 14.07 6.425 15.03 6.695C17.325 5.135 18.33 5.465 18.33 5.465C18.99 7.115 18.57 8.345 18.45 8.645C19.215 9.485 19.68 10.55 19.68 11.87C19.68 16.475 16.875 17.495 14.205 17.795C14.64 18.17 15.015 18.89 15.015 20.015C15.015 21.62 15 22.91 15 23.315C15 23.63 15.225 24.005 15.825 23.885C18.2072 23.0807 20.2772 21.5497 21.7437 19.5074C23.2101 17.465 23.9993 15.0143 24 12.5C24 5.87 18.63 0.5 12 0.5Z"
									fill="#94A3B8"
								/>
							</svg>
						</a>
					</nav>
				</div>
			</div>
		</div>

		<div
			id="mobileMenu"
			class="mobile-menu md:hidden absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform"
		>
			<div
				class="dark:bg-indigo-900 ring-1 ring-black ring-opacity-5 divide-gray-50 dark:divide-indigo-700 bg-white divide-y-2 rounded-lg shadow-lg"
			>
				<div class="px-5 pt-5 pb-6">
					<div class="flex items-center justify-between pb-4">
						<div>
							{#if $themeStore.theme == 'dark'}
								<img class="h-8 w`-auto sm:h-10" src={logoMobileDark} alt={logoAlt} />
							{:else}
								<img class="sm:h-10 w-auto h-8" src={logoMobile} alt={logoAlt} />
							{/if}
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="dark:bg-indigo-200 dark:text-indigo-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md"
								on:click={closeHamburgerMenu}
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg
									class="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="gap-y-8 grid">
							<a
								href="/"
								class="hover:bg-gray-50 dark:hover:bg-indigo-600 flex items-center p-3 -m-3 rounded-md"
								class:active={$page.url.pathname === '/'}
								sveltekit:prefetch
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="dark:text-indigo-400 flex-shrink-0 w-6 h-6 text-indigo-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								<span class="dark:text-indigo-200 ml-3 text-base font-medium text-gray-900">
									Home
								</span>
							</a>

							<a
								href="/list"
								class:active={$page.url.pathname === '/list'}
								class="hover:bg-gray-50 dark:hover:bg-indigo-600 flex items-center p-3 -m-3 rounded-md"
								sveltekit:prefetch
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="dark:text-indigo-400 flex-shrink-0 w-6 h-6 text-indigo-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
									/>
								</svg>
								<span class="dark:text-indigo-200 ml-3 text-base font-medium text-gray-900">
									List
								</span>
							</a>

							<a
								href="/about"
								class:active={$page.url.pathname === '/about'}
								class="hover:bg-gray-50 dark:hover:bg-indigo-600 flex items-center p-3 -m-3 rounded-md"
								sveltekit:prefetch
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="dark:text-indigo-400 flex-shrink-0 w-6 h-6 text-indigo-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								<span class="dark:text-indigo-200 ml-3 text-base font-medium text-gray-900">
									About
								</span>
							</a>
						</nav>
					</div>
				</div>
				<div class="px-5 py-6 space-y-6">
					<div class="gap-y-4 gap-x-6 place-items-center grid grid-cols-3">
						<a href="https://github.com/usefullists/pokelist" target="blank">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.81 3.435 22.295 8.205 23.885C8.805 23.99 9.03 23.63 9.03 23.315C9.03 23.03 9.015 22.085 9.015 21.08C6 21.635 5.22 20.345 4.98 19.67C4.845 19.325 4.26 18.26 3.75 17.975C3.33 17.75 2.73 17.195 3.735 17.18C4.68 17.165 5.355 18.05 5.58 18.41C6.66 20.225 8.385 19.715 9.075 19.4C9.18 18.62 9.495 18.095 9.84 17.795C7.17 17.495 4.38 16.46 4.38 11.87C4.38 10.565 4.845 9.485 5.61 8.645C5.49 8.345 5.07 7.115 5.73 5.465C5.73 5.465 6.735 5.15 9.03 6.695C9.99 6.425 11.01 6.29 12.03 6.29C13.05 6.29 14.07 6.425 15.03 6.695C17.325 5.135 18.33 5.465 18.33 5.465C18.99 7.115 18.57 8.345 18.45 8.645C19.215 9.485 19.68 10.55 19.68 11.87C19.68 16.475 16.875 17.495 14.205 17.795C14.64 18.17 15.015 18.89 15.015 20.015C15.015 21.62 15 22.91 15 23.315C15 23.63 15.225 24.005 15.825 23.885C18.2072 23.0807 20.2772 21.5497 21.7437 19.5074C23.2101 17.465 23.9993 15.0143 24 12.5C24 5.87 18.63 0.5 12 0.5Z"
									fill="#94A3B8"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	:global.mobile-menu {
		@apply opacity-0 invisible scale-95;
		&.opened {
			@apply opacity-100 visible scale-100 duration-100 ease-in;
		}
	}
	nav .active {
		@apply text-indigo-600;
	}
	.dark nav .active {
		@apply text-indigo-400;
	}
	.mobile-menu .active {
		@apply bg-indigo-50 dark:bg-indigo-600;
	}
</style>
