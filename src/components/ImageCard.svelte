<script lang='ts'>
	export let img: string = '';
	export let title: string = '';
	export let content: string = '';
	export let link: string = '';
</script>

<div class="card image-card">
	{#if img }
		<div
			style={`background-image: url(/${img})`}
			alt={`${img}`}
			class="card content div-img"
		></div>
	{:else}
		<div class="card content div-img no-picture">
			<p>NO PICTURE</p>
		</div>
	{/if}
	<div class="content">
		<h3>{ title }</h3>
		<p>{ content }</p>
		<a href={link} target="_blank" rel="noopener">You can show or get from here</a>
	</div>
</div>

<style lang="scss">
  $radius-size: 10px;

  .image-card {
    height: 400px;
    h2 {
      margin: 0;
    }
    img {
      height: 100%;
      width: 100%;
    }
    .content {
      border-radius: $radius-size;
      background-size: cover;
      padding: 0 5%;
      h3 {
        text-align: center;
      }
    }
    .div-img {
      height: 50%;
    }
  }

  .no-picture {
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: $theme-black;
    p {
      font-weight: 700;
      font-size: 24px;
      color: $text-light;
    }
  }
</style>
