<script lang='ts'>
	export let title: string = '';
</script>


<div class="content-block">
	<h2>{ title }</h2>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
  .content-block {
    text-align: left;
  }

  h2 {
    font-size: 3em;
    margin: 2.5% 0;
    &:first-letter {
      color: $primary-color;
    }
  }

  h3 {
    font-size: 2.5em;
    margin: 0;
    &:first-letter {
      color: $primary-color;
    }
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
