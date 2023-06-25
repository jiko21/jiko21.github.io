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
			class="card div-img"
		></div>
	{:else}
		<div class="card div-img no-picture">
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

  .image-card {
	border: #dedede solid 1px;
	border-radius: 0.5rem;
	box-shadow: 0 3px 1px #dedede;
    h2 {
      margin: 0;
    }
    img {
      height: 200px;
      width: 100%;
    }
    .content {
      border-radius: 0.5rem;
      background-size: cover;
      margin: 1rem;
      h3 {
        text-align: center;
      }
    }
    .div-img {
      height: 200px;
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
