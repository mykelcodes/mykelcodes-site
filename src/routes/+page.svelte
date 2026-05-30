<script lang="ts">
	import { resolve } from '$app/paths';
	import HeroSystem from '$lib/components/HeroSystem.svelte';
	import ImpactMetric from '$lib/components/ImpactMetric.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { careerHighlights, currentFocus, featuredProjects, metrics, site } from '$lib/site';
	import { ArrowRight, Building2, CheckCircle2, CircleDot, Mail, MapPin } from '@lucide/svelte';
</script>

<Seo />

<section class="bg-(--surface-muted) py-6">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 lg:grid-cols-[296px_1fr]">
			<aside class="lg:sticky lg:top-24 lg:self-start">
				<div class="gh-panel bg-(--surface) p-5">
					<div
						class="relative mx-auto size-36 overflow-hidden border border-(--border) bg-[#24292f] sm:mx-0 sm:size-44"
					>
						<div
							class="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(163,113,247,0.55),transparent_30%)]"
						></div>
						<div
							class="absolute inset-0 grid place-items-center text-5xl font-semibold text-white"
						>
							MO
						</div>
					</div>
					<h1 class="mt-5 text-2xl font-normal text-neutral-950 dark:text-white">
						{site.name}
					</h1>
					<p class="text-lg text-neutral-500 dark:text-neutral-400">mykelcodes</p>
					<p class="mt-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
						{site.role}. {site.tagline}
					</p>
					<a class="gh-button gh-button-primary mt-5 w-full" href={resolve('/contact')}
						>Start a conversation</a
					>
					<div
						class="mt-5 space-y-2 border-t border-(--border) pt-5 text-sm text-neutral-600 dark:text-neutral-300"
					>
						<p class="flex items-center gap-2">
							<Building2 class="size-4" aria-hidden="true" /> Independent builder
						</p>
						<p class="flex items-center gap-2">
							<MapPin class="size-4" aria-hidden="true" /> Building globally
						</p>
						<a class="gh-link flex items-center gap-2" href={`mailto:${site.email}`}
							><Mail class="size-4" aria-hidden="true" /> {site.email}</a
						>
					</div>
				</div>
			</aside>

			<div class="space-y-6">
				<div class="gh-panel overflow-hidden bg-(--surface)">
					<div class="border-b border-(--border) bg-(--surface-muted) px-4 py-3">
						<p class="text-sm font-semibold text-neutral-900 dark:text-white">
							mykelcodes / README.md
						</p>
					</div>
					<div class="p-5 sm:p-6">
						<p class="gh-label">React Native, product engineering, leadership</p>
						<h2
							class="mt-4 text-3xl font-normal text-balance text-neutral-950 sm:text-4xl dark:text-white"
						>
							I build useful systems for ambitious products.
						</h2>
						<p
							class="mt-4 max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-300"
						>
							{site.description} This hub organizes selected work, current focus, career
							highlights, and ways to collaborate.
						</p>
						<div class="mt-6 flex flex-wrap gap-3">
							<a class="gh-button gh-button-primary" href={resolve('/work')}
								>View selected work <ArrowRight
									class="size-4"
									aria-hidden="true"
								/></a
							>
							<a class="gh-button" href={resolve('/about')}>Read profile</a>
						</div>
					</div>
				</div>

				<HeroSystem />

				<section>
					<div class="mb-3 flex items-center justify-between gap-4">
						<h2 class="text-base font-semibold text-neutral-950 dark:text-white">
							Selected work
						</h2>
						<a
							class="text-sm font-semibold text-[#0969da] dark:text-[#58a6ff]"
							href={resolve('/work')}>View all work</a
						>
					</div>
					<div class="grid gap-4 lg:grid-cols-3">
						{#each featuredProjects as project (project.title)}
							<ProjectCard {project} featured />
						{/each}
					</div>
				</section>

				<section class="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
					<div class="gh-panel bg-(--surface) p-4">
						<div class="flex items-center gap-2 border-b border-(--border) pb-3">
							<CircleDot class="size-4 text-(--accent)" aria-hidden="true" />
							<h2 class="text-base font-semibold text-neutral-950 dark:text-white">
								Current focus
							</h2>
						</div>
						<div class="divide-y divide-(--border)">
							{#each currentFocus as focus, index (focus)}
								<div class="py-4">
									<p class="font-semibold text-neutral-950 dark:text-white">
										{focus}
									</p>
									<p class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
										focus area #{index + 1}
									</p>
								</div>
							{/each}
						</div>
					</div>

					<div class="gh-panel bg-(--surface) p-4">
						<div class="flex items-center gap-2 border-b border-(--border) pb-3">
							<CheckCircle2 class="size-4 text-(--success)" aria-hidden="true" />
							<h2 class="text-base font-semibold text-neutral-950 dark:text-white">
								Career highlights
							</h2>
						</div>
						<div class="divide-y divide-(--border)">
							{#each careerHighlights as highlight, index (highlight)}
								<div class="py-4">
									<p
										class="flex gap-2 text-sm font-semibold text-neutral-950 dark:text-white"
									>
										<CheckCircle2
											class="mt-0.5 size-4 shrink-0 text-(--success)"
											aria-hidden="true"
										/>
										{highlight}
									</p>
									<p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
										career highlight #{index + 1}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</section>

				<section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{#each metrics as metric (metric.label)}
						<ImpactMetric value={metric.value} label={metric.label} />
					{/each}
				</section>

				<section
					class="gh-panel bg-(--surface) p-5 sm:flex sm:items-center sm:justify-between sm:gap-6"
				>
					<div>
						<h2 class="text-lg font-normal text-neutral-950 dark:text-white">
							Have a product worth making clearer?
						</h2>
						<p
							class="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-300"
						>
							Bring the ambition, constraints, and messy middle. I can help shape the
							product system, interface, and technical path.
						</p>
					</div>
					<a
						class="gh-button gh-button-primary mt-4 shrink-0 sm:mt-0"
						href={resolve('/contact')}
						>Start a conversation <ArrowRight class="size-4" aria-hidden="true" /></a
					>
				</section>
			</div>
		</div>
	</div>
</section>
