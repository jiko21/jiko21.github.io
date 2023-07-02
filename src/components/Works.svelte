<script lang="ts">
	import { onMount } from "svelte";
	import ContentBlock from "./ContentBlock.svelte";
	import ImageCard from "./ImageCard.svelte";

  export let contents: {title: string; img?: string; content: string; link: string; }[];

  let pararax;


  function onScroll() {
    const children = Array.from(pararax.children) as HTMLDivElement[];
    const top = pararax.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      children.forEach((item, i) => {
        const val = 200 * Math.max((top - 200) / (window.innerHeight - 200), 0);
        item.style.transform =`translateY(${val * (i + 1.5)}px)`

        const opac = Math.sqrt(Math.max((top - 200) / (window.innerHeight - 200), 0));
        item.style.opacity =`${1 - opac}`
      });
    } else {
      children.forEach((item, i) => {
        item.style.transform =`translateY(${200 * (i + 1.5)}px)`;
        item.style.opacity = '0';
      })
    }
  }

  onMount(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  })
</script>
<ContentBlock title="Works">
  <div class="works" bind:this={pararax}>
    {#each contents as item, i (i)}
      <div>
        <ImageCard title={item.title} img={item.img} content={item.content} link={item.link} />
      </div>
    {/each}
  </div>
</ContentBlock>

<style>

	.works {
		display: flex;
		flex-wrap: wrap;
	}

  .works > div {
    width: calc(100% / 3 - 8px);
    margin: 4px;
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin: 4px 0;
    }
  }
</style>
