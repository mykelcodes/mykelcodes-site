<script lang="ts">
	import { resolve } from '$app/paths';
	import { navigation, site } from '$lib/site';
	import { ArrowUpRight } from '@lucide/svelte';
</script>

<footer class="border-t border-(--border) bg-(--surface-muted)">
	<div
		class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8"
	>
		<div>
			<a
				href={resolve('/')}
				class="inline-flex items-center gap-3 text-sm font-semibold text-neutral-950 dark:text-white"
			>
				<span
					class="grid size-9 place-items-center bg-[#24292f] text-white dark:bg-white dark:text-[#24292f]"
					>MO</span
				>
				{site.name}
			</a>
			<p
				class="mt-5 max-w-xl text-sm leading-6 text-balance text-neutral-600 dark:text-neutral-300"
			>
				{site.tagline}
			</p>
		</div>
		<div class="grid gap-8 sm:grid-cols-2">
			<div>
				<p
					class="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase dark:text-neutral-400"
				>
					Explore
				</p>
				<div class="mt-4 grid gap-2">
					{#each navigation as item (item.href)}
						<a
							class="text-sm text-neutral-600 transition hover:text-purple-700 dark:text-neutral-300 dark:hover:text-purple-200"
							href={resolve(item.href)}>{item.label}</a
						>
					{/each}
				</div>
			</div>
			<div>
				<p
					class="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase dark:text-neutral-400"
				>
					Elsewhere
				</p>
				<div class="mt-4 grid gap-2">
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					{#each site.socials as social (social.href)}
						<a
							class="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-purple-700 dark:text-neutral-300 dark:hover:text-purple-200"
							href={social.href}
							target="_blank"
							rel="noreferrer"
						>
							{social.label}
							<ArrowUpRight class="size-3.5" aria-hidden="true" />
						</a>
					{/each}
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</div>
			</div>
		</div>
	</div>
	<div
		class="mx-auto flex max-w-7xl flex-col gap-3 border-t border-black/10 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:border-white/10 dark:text-neutral-400"
	>
		<p>© 2026 {site.name}. Built with SvelteKit and deployed on Netlify.</p>
		<a
			href={`mailto:${site.email}`}
			class="transition hover:text-purple-700 dark:hover:text-purple-200">{site.email}</a
		>
	</div>
</footer>
