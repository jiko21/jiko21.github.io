<script lang="ts">
	export let src: string = '';
	export let link: string = '';
</script>

<a href={link} target="_blank" class="card" rel="noopener">
	<img {src} alt={link} width="32" height="32" />
</a>

<style lang="scss">
	img {
		@apply hover:scale-125;
		width: 48px;
		height: 48px;
		@media screen and (max-width: 1200px) {
			width: 32px;
			height: 32px;
		}
	}
</style>
