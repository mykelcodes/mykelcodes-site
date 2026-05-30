<script lang="ts">
	import { site } from '$lib/site';

	type Props = {
		title?: string;
		description?: string;
		path?: string;
		image?: string;
		type?: 'website' | 'article';
	};

	let {
		title = site.name,
		description = site.description,
		path = '',
		image = '/og.svg',
		type = 'website'
	}: Props = $props();

	const pageTitle = $derived(title === site.name ? title : `${title} | ${site.name}`);
	const canonical = $derived(`${site.url}${path}`);
	const imageUrl = $derived(image.startsWith('http') ? image : `${site.url}${image}`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
