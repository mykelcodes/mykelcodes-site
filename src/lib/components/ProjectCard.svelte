<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Project } from '$lib/site';
	import { ArrowUpRight, BookOpen, Smartphone } from '@lucide/svelte';

	type Props = {
		project: Project;
		featured?: boolean;
	};

	let { project, featured = false }: Props = $props();
	type ResolvableRoute = Parameters<typeof resolve>[0];
</script>

<article
	id={project.title.toLowerCase().replaceAll(' ', '-')}
	class={`gh-panel group p-4 transition hover:border-(--accent) ${featured ? 'min-h-64' : 'min-h-56'}`}
>
	<div class="flex flex-wrap items-start justify-between gap-3">
		<div class="min-w-0 flex-1">
			<div class="flex items-start gap-2">
				<BookOpen class="mt-0.5 size-4 shrink-0 text-neutral-500" aria-hidden="true" />
				<h3
					class="min-w-0 wrap-break-word text-base font-medium text-[#0969da] dark:text-[#58a6ff]"
				>
					{project.title}
				</h3>
			</div>
			<p class="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
				{project.description}
			</p>
		</div>
		<span class="gh-label max-w-full">{project.status}</span>
	</div>

	<div class="mt-6 flex flex-wrap gap-2">
		{#each project.technologies as technology (technology)}
			<span class="gh-label">
				<span class="size-2 bg-(--accent)"></span>
				{technology}
			</span>
		{/each}
	</div>

	<div class="mt-8 flex flex-wrap gap-3">
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		{#each project.links as link (link.href)}
			<a
				href={link.href.startsWith('http')
					? link.href
					: resolve(link.href as ResolvableRoute)}
				class="gh-button px-2.5 py-1 text-xs"
				target={link.href.startsWith('http') ? '_blank' : undefined}
				rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
			>
				{#if link.kind === 'app-store' || link.kind === 'play-store'}
					<Smartphone class="size-4" aria-hidden="true" />
				{:else}
					<ArrowUpRight class="size-4" aria-hidden="true" />
				{/if}
				{link.label}
			</a>
		{/each}
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</div>
</article>
