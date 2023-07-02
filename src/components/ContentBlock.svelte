<script lang="ts">
	import { useContentBlock } from "../hooks/useContentBlock";
	import { onMount } from "svelte";

	export let title: string = '';
	export let isFadeIn: boolean | undefined = false;

	let contentBlock: HTMLDivElement;
	let unMountCallback;
	onMount(() => {
		if (isFadeIn) {

			unMountCallback = useContentBlock(contentBlock);
		}
		return () => {
			unMountCallback && unMountCallback();
		}
	});
</script>

<div class="content-block" bind:this={contentBlock}>
	<h2>{title}</h2>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.content-block {
		margin: 2rem 0;
		padding: 1rem;
		text-align: left;
	}

	h2 {
		font-size: 2rem;
		margin: 2.5% 0;
	}

	h3 {
		font-size: 2.5em;
		margin: 0;
	}

	p,
	li {
		font-size: 1.5em;
		span {
			font-weight: bold;
		}
	}

	ul {
		list-style: none;
		padding: 0;
	}
</style>
