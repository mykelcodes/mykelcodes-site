<script lang="ts">
	const cells = Array.from({ length: 84 }, (_, index) => {
		const pattern = [0, 1, 2, 0, 3, 1, 0, 4, 2, 0, 1, 3];
		return pattern[(index + Math.floor(index / 7)) % pattern.length];
	});

	const activity = [
		{
			label: 'Architecture',
			title: 'Expo and React Native systems for reliable mobile products',
			meta: 'current focus'
		},
		{
			label: 'Delivery',
			title: 'Mobile and web platforms across fintech, health, travel, and logistics',
			meta: '10+ years'
		},
		{
			label: 'Leadership',
			title: 'Reusable engineering patterns for teams that need to keep moving',
			meta: 'global teams'
		}
	];
</script>

<div class="gh-panel overflow-hidden bg-(--surface)">
	<div class="border-b border-(--border) bg-(--surface-muted) px-4 py-3">
		<div class="flex items-center justify-between gap-4">
			<div>
				<p class="text-sm font-semibold text-neutral-900 dark:text-white">
					michael-olawale/activity
				</p>
				<p class="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
					Public profile activity
				</p>
			</div>
			<span class="gh-label">main</span>
		</div>
	</div>

	<div class="p-4">
		<div class="border border-(--border) bg-(--surface) p-4">
			<div class="flex flex-wrap items-center justify-between gap-3">
				<h3 class="text-sm font-semibold text-neutral-900 dark:text-white">
					Contributions this year
				</h3>
				<span class="text-xs text-neutral-500 dark:text-neutral-400"
					>Building across product, engineering, and systems</span
				>
			</div>
			<p class="sr-only">
				Decorative contribution grid representing steady work across product, engineering,
				and systems.
			</p>
			<div class="mt-4 grid grid-cols-12 gap-1.5" aria-hidden="true">
				{#each cells as level, index (index)}
					<span class="contribution-cell" data-level={level}></span>
				{/each}
			</div>
		</div>

		<div class="mt-4 grid gap-3 lg:grid-cols-3">
			{#each activity as item (item.title)}
				<div class="flex gap-3 border border-(--border) bg-(--surface) p-3">
					<span class="mt-1 size-2.5 bg-(--accent)"></span>
					<div>
						<p
							class="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400"
						>
							{item.label}
						</p>
						<p class="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
							{item.title}
						</p>
						<p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
							{item.meta}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
