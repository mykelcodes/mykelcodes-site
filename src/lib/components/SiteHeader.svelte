<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { navigation, site } from '$lib/site';
	import { Menu, Moon, Sun, X } from '@lucide/svelte';

	type Props = {
		pathname: string;
	};

	let { pathname }: Props = $props();
	let menuOpen = $state(false);
	let theme = $state<'light' | 'dark'>('light');

	if (browser) {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme =
			savedTheme === 'dark' || savedTheme === 'light'
				? savedTheme
				: prefersDark
					? 'dark'
					: 'light';
	}

	$effect(() => {
		if (!browser) return;
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
		localStorage.setItem('theme', theme);
	});

	const isActive = (href: string) =>
		href === '/' ? pathname === '/' : pathname.startsWith(href);

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<header
	class="sticky top-0 z-50 border-b border-[#d0d7de] bg-[#24292f] text-white dark:border-[#30363d] dark:bg-[#161b22]"
>
	<a class="skip-link" href="#main">Skip to content</a>
	<nav
		class="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
		aria-label="Main navigation"
	>
		<a
			href={resolve('/')}
			class="group flex items-center gap-3"
			aria-label={`${site.name} home`}
		>
			<span
				class="grid size-8 place-items-center bg-white text-sm font-semibold text-[#24292f] transition-transform group-hover:scale-105"
				>MO</span
			>
			<span class="hidden text-sm font-semibold tracking-tight text-white sm:block"
				>{site.name}</span
			>
		</a>

		<div class="order-3 hidden w-full items-center gap-1 md:order-0 md:flex md:w-auto">
			{#each navigation as item (item.href)}
				<a
					href={resolve(item.href)}
					class={`px-3 py-2 text-sm font-semibold transition ${isActive(item.href) ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
					aria-current={isActive(item.href) ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<button
				type="button"
				class="grid size-9 place-items-center border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
				aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
				onclick={toggleTheme}
			>
				{#if theme === 'dark'}
					<Sun class="size-4" aria-hidden="true" />
				{:else}
					<Moon class="size-4" aria-hidden="true" />
				{/if}
			</button>
			<a
				class="hidden bg-(--accent) px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-(--accent-strong) sm:inline-flex"
				href={resolve('/contact')}
			>
				Collaborate
			</a>
			<button
				type="button"
				class="grid size-9 place-items-center border border-white/20 bg-white/5 text-white md:hidden"
				aria-label="Toggle navigation menu"
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				{#if menuOpen}
					<X class="size-5" aria-hidden="true" />
				{:else}
					<Menu class="size-5" aria-hidden="true" />
				{/if}
			</button>
		</div>
	</nav>

	{#if menuOpen}
		<div class="border-t border-white/10 bg-[#24292f] px-4 py-4 md:hidden dark:bg-[#161b22]">
			<div class="grid gap-2">
				{#each navigation as item (item.href)}
					<a
						href={resolve(item.href)}
						class={`px-4 py-3 text-sm font-semibold ${isActive(item.href) ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
						aria-current={isActive(item.href) ? 'page' : undefined}
						onclick={() => (menuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
