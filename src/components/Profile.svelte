<script lang="ts">
	import { useContentBlock } from '../hooks/useContentBlock';
	import ContentBlock from './ContentBlock.svelte';
	export let details: string[] = [];
</script>

<ContentBlock title="Profile" isFadeIn>
	<ul class="card">
		{#each details as item, i (i)}
			<li>
				{item}
			</li>
		{/each}
	</ul>
</ContentBlock>
