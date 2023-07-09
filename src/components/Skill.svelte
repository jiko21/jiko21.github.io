<script lang="ts">
	import ContentBlock from "./ContentBlock.svelte";

  export let detail: {
    lang: string[];
    framework: string[];
  };
</script>
<ContentBlock title="Skills" isFadeIn>
  <div class="skill-box">
    <div class="card">
      <h3>Language</h3>
      <ul>
        {#each detail['lang'] as item, i (i)}
          <li>
            {item}
          </li>
        {/each}
      </ul>
    </div>
    <div class="card">
      <h3>Framework</h3>
      <ul>
        {#each detail['framework'] as item, i (i)}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</ContentBlock>
<style>
  .skill-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		@media screen and (max-width: 1200px) {
			flex-direction: column;
			&:first-child {
				margin: 0 0 10px;
			}
		}
	}

  .skill-box > div {
    margin: 0 10px;
    @media screen and (max-width: 1200px) {
      margin: 0;
    }
  }
</style>
