<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import '@fontsource/geist-mono/latin-400.css';
	import '@fontsource/geist-mono/latin-500.css';
	import '@fontsource/geist-mono/latin-600.css';
	import '@fontsource/geist-mono/latin-700.css';
	import '@fontsource/instrument-serif/latin-400.css';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#f7f4ed" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#0b0b0b" media="(prefers-color-scheme: dark)" />
</svelte:head>

<SiteHeader pathname={page.url.pathname} />
<main id="main">
	{@render children()}
</main>
<SiteFooter />
