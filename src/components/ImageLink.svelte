<script lang="ts">
	export let src: string = '';
	export let link: string = '';
</script>
	<a href={link} target="_blank" class='card' rel="noopener">
		<img src={src} alt={link} width="32" height="32" />
	</a>
<style lang="scss">
  img {
    width: 48px;
    height: 48px;
    @media screen and (max-width: 1200px) {
      width: 32px;
      height: 32px;
    }
  }
</style>
