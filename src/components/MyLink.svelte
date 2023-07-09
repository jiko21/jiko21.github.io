<script lang="ts">
	export let src: string = '';
	export let link: string = '';
</script>

<a href={link} target="_blank" rel="noopener">
	<img {src} alt={link} width="32" height="32" />
</a>

<style lang="scss">
	img {
		width: 64px;
		height: 64px;
		@media screen and (max-width: 1200px) {
			width: 32px;
			height: 32px;
		}
	}
</style>
