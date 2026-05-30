<script lang="ts">
	import ImpactMetric from '$lib/components/ImpactMetric.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { impactAreas, metrics, testimonials } from '$lib/site';
	import Activity from '@lucide/svelte/icons/activity';
	import Building2 from '@lucide/svelte/icons/building-2';
	import ChartColumn from '@lucide/svelte/icons/chart-column';
</script>

<Seo
	title="Impact"
	path="/impact"
	description="Metrics, reach, teams, products, industries, and testimonials representing Michael Olawale's product and technology impact."
/>

<section class="bg-(--surface-muted) py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="gh-panel bg-(--surface) p-5">
			<p
				class="flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white"
			>
				<ChartColumn class="size-4" aria-hidden="true" /> Organization insights
			</p>
			<h1
				class="mt-3 text-3xl font-normal text-balance text-neutral-950 sm:text-4xl dark:text-white"
			>
				Practical software impact across mobile products, teams, and industries.
			</h1>
			<p class="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
				A concise view of the products, regions, and technical contexts that have shaped
				Michael's work across React Native, frontend systems, banking platforms, and
				AI-enabled product experiences.
			</p>
		</div>
		<div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each metrics as metric (metric.label)}
				<ImpactMetric value={metric.value} label={metric.label} />
			{/each}
		</div>

		<div class="gh-panel mt-5 bg-(--surface) p-5">
			<h2
				class="flex items-center gap-2 text-base font-semibold text-neutral-950 dark:text-white"
			>
				<Activity class="size-4" aria-hidden="true" /> Impact areas
			</h2>
			<div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{#each impactAreas as area (area)}
					<div
						class="border border-(--border) bg-(--surface-muted) px-4 py-4 text-sm font-semibold text-neutral-900 dark:text-white"
					>
						{area}
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-5 grid gap-5 lg:grid-cols-2">
			{#each testimonials as testimonial (testimonial.author)}
				<figure class="gh-panel bg-(--surface) p-5">
					<blockquote
						class="text-base leading-7 font-medium text-pretty text-neutral-950 dark:text-white"
					>
						“{testimonial.quote}”
					</blockquote>
					<figcaption class="mt-6 text-sm text-neutral-600 dark:text-neutral-300">
						<span class="font-semibold text-neutral-950 dark:text-white">
							{testimonial.author}
						</span>, {testimonial.role}
					</figcaption>
				</figure>
			{/each}
		</div>
		<div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
			{#each ['FINTECH', 'HEALTH', 'TRAVEL', 'LOGISTICS'] as logo (logo)}
				<div
					class="grid h-20 place-items-center border border-(--border) bg-(--surface) text-xs font-semibold tracking-[0.2em] text-neutral-500 dark:text-neutral-400"
				>
					<Building2 class="sr-only" />
					{logo}
				</div>
			{/each}
		</div>
	</div>
</section>
