<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
	import { Calendar, CircleDot, Mail, Send } from '@lucide/svelte';

	const opportunities = [
		'React Native or Expo mobile leadership',
		'Frontend architecture for product teams',
		'AI-enabled mobile product development',
		'Advisory conversations for ambitious teams'
	];
</script>

<Seo
	title="Contact"
	path="/contact"
	description="Contact Michael Olawale for product collaboration, technical leadership, advisory conversations, and focused software builds."
/>

<section class="bg-(--surface-muted) py-8">
	<div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
		<div>
			<div class="gh-panel bg-(--surface) p-5">
				<p
					class="flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white"
				>
					<CircleDot class="size-4 text-(--accent)" aria-hidden="true" /> Contact
				</p>
				<h1
					class="mt-3 text-3xl font-normal text-balance text-neutral-950 sm:text-4xl dark:text-white"
				>
					Start a focused conversation.
				</h1>
				<p class="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
					For collaborations, product conversations, advisory work, or thoughtful software
					builds, send a concise note with the shape of the opportunity.
				</p>
			</div>
			<div class="mt-5 grid gap-3">
				<a class="gh-button justify-start bg-(--surface)" href={`mailto:${site.email}`}>
					<Mail class="size-4" aria-hidden="true" />
					{site.email}
				</a>
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					class="gh-button justify-start bg-(--surface)"
					href={site.calendarUrl}
					target="_blank"
					rel="noreferrer"
				>
					<Calendar class="size-4" aria-hidden="true" />
					Book a conversation
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			</div>
		</div>

		<form
			class="gh-panel bg-(--surface) p-5"
			name="contact"
			method="POST"
			data-netlify="true"
			action="/contact"
		>
			<input type="hidden" name="form-name" value="contact" />
			<div class="grid gap-5 sm:grid-cols-2">
				<label
					class="grid gap-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100"
				>
					Name
					<input class="form-field" name="name" autocomplete="name" required />
				</label>
				<label
					class="grid gap-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100"
				>
					Email
					<input
						class="form-field"
						name="email"
						type="email"
						autocomplete="email"
						required
					/>
				</label>
			</div>
			<label
				class="mt-5 grid gap-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100"
			>
				Opportunity
				<select class="form-field" name="opportunity">
					{#each opportunities as opportunity (opportunity)}
						<option>{opportunity}</option>
					{/each}
				</select>
			</label>
			<label
				class="mt-5 grid gap-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100"
			>
				Message
				<textarea
					class="form-field min-h-36 resize-y"
					name="message"
					required
					placeholder="A few sentences about what you are building, what you need, and what would make the conversation useful."
				></textarea>
			</label>
			<button class="gh-button gh-button-primary mt-6 w-full sm:w-auto" type="submit">
				Send message
				<Send class="size-4" aria-hidden="true" />
			</button>
		</form>
	</div>
</section>
