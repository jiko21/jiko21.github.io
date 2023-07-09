<script lang="ts">
	import { onMount } from "svelte";
	import ContentBlock from "./ContentBlock.svelte";
	import ImageCard from "./ImageCard.svelte";

  export let contents: {title: string; img?: string; content: string; link: string; }[];

  let pararax;

  function fullScreenScroll() {
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
  function smallScreenScroll() {
    const children = Array.from(pararax.children) as HTMLDivElement[];
    children.forEach((item) => {
      const top = item.getBoundingClientRect().top;
      if (top < window.innerHeight) {
        const val = 200 * Math.max((top - 200) / (window.innerHeight - 200), 0);
        item.style.transform =`translateY(${val * (1.5)}px)`

        const opac = Math.sqrt(Math.max((top - 200) / (window.innerHeight - 200), 0));
        item.style.opacity =`${1 - opac}`
      } else {
        item.style.transform =`translateY(${200 * 1.5}px)`;
        item.style.opacity = '0';
      }
    });
  }


  function onScroll() {
    if (window.innerWidth >= 1200) {
      fullScreenScroll();
    } else {
      smallScreenScroll();
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
    margin: 4px;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-timing-function: ease-out;
    width: calc(100% / 3 - 8px);
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin: 4px 0;
    }
  }
</style>
