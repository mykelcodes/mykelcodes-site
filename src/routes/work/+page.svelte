<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { projectArchive } from '$lib/site';
	import CircleDot from '@lucide/svelte/icons/circle-dot';
	import GitBranch from '@lucide/svelte/icons/git-branch';
	import PackageCheck from '@lucide/svelte/icons/package-check';
</script>

<Seo
	title="Work"
	path="/work"
	description="A curated grid of mobile products, frontend systems, banking platforms, and cross-platform work built or shaped by Michael Olawale."
/>

<section class="bg-(--surface-muted) py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="gh-panel overflow-hidden bg-(--surface)">
			<div class="border-b border-(--border) bg-(--surface-muted) px-4 py-4">
				<div class="flex flex-wrap items-center justify-between gap-3">
					<div>
						<h1 class="text-2xl font-semibold text-neutral-950 dark:text-white">
							Selected work
						</h1>
						<p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
							Mobile products, frontend systems, banking platforms, and private
							implementation work.
						</p>
					</div>
					<span class="gh-label">{projectArchive.length} work areas</span>
				</div>
			</div>
			<div class="grid gap-3 border-b border-(--border) p-4 md:grid-cols-3">
				<div class="gh-panel-muted p-3 text-sm">
					<PackageCheck class="mb-2 size-4 text-(--success)" aria-hidden="true" /> Shipped products
					and enterprise systems
				</div>
				<div class="gh-panel-muted p-3 text-sm">
					<GitBranch class="mb-2 size-4 text-(--accent)" aria-hidden="true" /> Cross-platform
					mobile delivery
				</div>
				<div class="gh-panel-muted p-3 text-sm">
					<CircleDot class="mb-2 size-4 text-(--accent)" aria-hidden="true" /> Public surfaces
					with private implementation detail
				</div>
			</div>
		</div>

		<div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
			{#each projectArchive as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>

<section class="bg-(--surface-muted) pb-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="gh-panel bg-(--surface) p-5">
			<h2 class="text-base font-semibold text-neutral-950 dark:text-white">Work pattern</h2>
			<div class="mt-4 grid gap-4 md:grid-cols-2">
				<div class="border border-(--border) p-4">
					<p class="text-sm font-semibold text-neutral-950 dark:text-white">
						Mobile-first delivery
					</p>
					<p class="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
						The work is strongest where product quality, mobile architecture, and team
						delivery need to move together.
					</p>
				</div>
				<div class="border border-(--border) p-4">
					<p class="text-sm font-semibold text-neutral-950 dark:text-white">
						Private systems, public clarity
					</p>
					<p class="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
						Much of the work lives inside banks, startups, and client teams, so this
						page presents the useful shape without exposing private implementation
						detail.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
