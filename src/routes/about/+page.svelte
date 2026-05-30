<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { expertise, principles, site, timeline } from '$lib/site';
	import { BookOpen, CheckCircle2, Clock3 } from '@lucide/svelte';
</script>

<Seo
	title="About"
	path="/about"
	description="The professional story, operating principles, and product philosophy behind Michael Olawale's work."
/>

<section class="bg-(--surface-muted) py-8">
	<div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[296px_1fr] lg:px-8">
		<aside class="space-y-4">
			<div class="gh-panel bg-(--surface) p-4">
				<img
					class="aspect-square w-full border border-(--border) bg-(--surface-muted) object-cover"
					src="/portrait-placeholder.svg"
					alt="Abstract portrait placeholder for Michael Olawale"
				/>
				<p
					class="mt-4 font-serif text-2xl leading-none font-normal text-neutral-950 dark:text-white"
				>
					{site.name}
				</p>
				<p class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{site.role}</p>
			</div>
			<div class="gh-panel bg-(--surface) p-4">
				<h2 class="text-sm font-semibold text-neutral-950 dark:text-white">Skills</h2>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each expertise as skill (skill)}
						<span class="gh-label">{skill}</span>
					{/each}
				</div>
			</div>
		</aside>

		<div class="space-y-5">
			<article class="gh-panel overflow-hidden bg-(--surface)">
				<div class="border-b border-(--border) bg-(--surface-muted) px-4 py-3">
					<p
						class="flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white"
					>
						<BookOpen class="size-4" aria-hidden="true" /> about / README.md
					</p>
				</div>
				<div class="prose max-w-none p-5 prose-neutral sm:p-6 dark:prose-invert">
					<h1>A web and mobile engineering leader shaping global product teams.</h1>
					<p>
						I am {site.name}, a React Native and frontend engineering leader with 10+
						years of experience building mobile and web products across fintech, health
						tech, travel, logistics, commerce, and consulting environments.
					</p>
					<p>
						My work has moved across Africa, North America, and Europe, from banking
						platforms and AI-enabled health products to travel and logistics systems.
						The through-line is reliable product execution: polished interfaces,
						reusable architecture, clear delivery, and teams that can keep moving with
						confidence.
					</p>
				</div>
			</article>

			<section id="experience" class="gh-panel bg-(--surface) p-4">
				<h2
					class="flex items-center gap-2 text-base font-semibold text-neutral-950 dark:text-white"
				>
					<Clock3 class="size-4" aria-hidden="true" /> Experience
				</h2>
				<div class="mt-4 divide-y divide-(--border)">
					{#each timeline as moment (moment.title)}
						<article class="grid gap-3 py-4 sm:grid-cols-[7rem_1fr]">
							<span class="text-sm font-semibold text-(--accent)"
								>{moment.period}</span
							>
							<div>
								<h3
									class="text-base font-semibold text-neutral-950 dark:text-white"
								>
									{moment.title}
								</h3>
								<p
									class="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300"
								>
									{moment.detail}
								</p>
							</div>
						</article>
					{/each}
				</div>
			</section>

			<section class="grid gap-4 lg:grid-cols-3">
				{#each principles as principle (principle.title)}
					<article class="gh-panel bg-(--surface) p-4">
						<h2
							class="flex gap-2 text-base font-semibold text-neutral-950 dark:text-white"
						>
							<CheckCircle2
								class="mt-0.5 size-4 shrink-0 text-(--success)"
								aria-hidden="true"
							/>
							{principle.title}
						</h2>
						<p class="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
							{principle.description}
						</p>
					</article>
				{/each}
			</section>
		</div>
	</div>
</section>
