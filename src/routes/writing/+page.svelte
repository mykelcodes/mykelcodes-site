<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { writing } from '$lib/site';
	import { MessageSquareText } from '@lucide/svelte';
</script>

<Seo
	title="Writing"
	path="/writing"
	description="Notes from Michael Olawale on mobile engineering, global product teams, AI-enabled product work, and thoughtful software delivery."
/>

<section class="bg-(--surface-muted) py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="gh-panel bg-(--surface) p-5">
			<p
				class="flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white"
			>
				<MessageSquareText class="size-4" aria-hidden="true" /> Discussions
			</p>
			<h1
				class="mt-3 text-3xl font-normal text-balance text-neutral-950 sm:text-4xl dark:text-white"
			>
				Notes on building useful, thoughtful technology.
			</h1>
			<p class="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
				Short notes on mobile engineering, global product teams, AI-enabled product work,
				and the decisions that make software feel reliable.
			</p>
		</div>
		<div class="mt-5 grid gap-4 lg:grid-cols-3">
			{#each writing as post (post.title)}
				<article
					class="gh-panel group bg-(--surface) p-5 transition hover:border-(--accent)"
				>
					<div
						class="flex items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400"
					>
						<time datetime={post.date}
							>{new Intl.DateTimeFormat('en', {
								month: 'short',
								day: 'numeric',
								year: 'numeric'
							}).format(new Date(post.date))}</time
						>
						<span>{post.readingTime}</span>
					</div>
					<h2
						class="mt-4 text-lg font-semibold text-[#0969da] transition dark:text-[#58a6ff]"
					>
						{post.title}
					</h2>
					<p class="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
						{post.excerpt}
					</p>
					<div class="mt-6 flex flex-wrap gap-2">
						{#each post.tags as tag (tag)}
							<span class="gh-label">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
