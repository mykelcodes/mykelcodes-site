<script lang="ts">
	type Props = {
		value: string;
		label: string;
	};

	let { value, label }: Props = $props();
</script>

<div class="gh-panel p-4 transition hover:border-(--accent)">
	<p class="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
		{value}
	</p>
	<p class="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{label}</p>
</div>
