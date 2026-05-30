<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
	};

	let { eyebrow, title, description, align = 'left' }: Props = $props();
</script>

<div class={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
	{#if eyebrow}
		<p
			class="text-xs font-semibold tracking-[0.14em] text-neutral-500 uppercase dark:text-neutral-400"
		>
			{eyebrow}
		</p>
	{/if}
	<h2
		class="mt-2 text-2xl tracking-tight text-balance text-neutral-950 sm:text-3xl dark:text-white"
	>
		{title}
	</h2>
	{#if description}
		<p
			class="mt-3 text-sm leading-6 text-pretty text-neutral-600 sm:text-base dark:text-neutral-300"
		>
			{description}
		</p>
	{/if}
</div>
