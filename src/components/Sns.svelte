<script lang="ts">
	import ContentBlock from "./ContentBlock.svelte";
	import ImageLink from "./ImageLink.svelte";


</script>
<ContentBlock title="SNS/Blog" isFadeIn>
  <div class="link-box">
    <ImageLink src="/github.png" link="http://github.com/jiko21" />
    <ImageLink src="/twitter.svg" link="https://twitter.com/jiko_21" />
    <ImageLink src="/blog.svg" link="https://jiko21-tech-blog.monster/" />
  </div>
</ContentBlock>
<style>
  .link-box {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 4px;
		gap: 32px;
	}

</style>
