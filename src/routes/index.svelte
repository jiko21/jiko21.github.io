<script lang="ts">
	import HeadImage from '../components/HeadImage.svelte';
	import ContentBlock from '../components/ContentBlock.svelte';
	import ImageLink from '../components/ImageLink.svelte';
	import ImageCard from '../components/ImageCard.svelte';
	import MyFooter from '../components/MyFooter.svelte';
	import { items } from '../contents';
	import 'modern-css-reset';
	import Profile from "../components/Profile.svelte";

	let y;
</script>
<svelte:head>
	<title>jiko21.me</title>
	<meta name="description" content="jiko21's homepage">
</svelte:head>
<svelte:window bind:scrollY={y}/>

<div class='container' style="transform: translateY({Math.min(y, 800)}px)">
	<HeadImage />
	<div class='wrap'>
		<Profile title={items['about'].title} detail={items['about'].detail} />
		<ContentBlock title={items['profile'].title}>
			<ul class='card'>
				{#each items['profile'].detail as item, i (i)}
					<li>
						{ item }
					</li>
				{/each}
			</ul>
		</ContentBlock>
		<ContentBlock title={items['skills'].title}>
			<div class='skill-box'>
				<div class='card'>
					<h3>Language</h3>
					<ul>
						{#each items['skills'].detail['lang'] as item, i (i)}
							<li>
								{ item }
							</li>
						{/each}
					</ul>
				</div>
				<div class='card'>
					<h3>Framework</h3>
					<ul>
						{#each items['skills'].detail['framework'] as item, i (i)}
							<li>{ item }
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</ContentBlock>
		<ContentBlock title='Works'>
			<div class='works'>
				{#each items.works.contents as item, i (i)}
					<div>
						<ImageCard
							title={item.title}
							img={item.img}
							content={item.content}
							link={item.link}
						/>
					</div>
				{/each}
			</div>
		</ContentBlock>
		<ContentBlock title={items['slides'].title}>
			<p class='card'>{@html items['slides'].detail}</p>
		</ContentBlock>
		<ContentBlock title='SNS/Blog'>
			<div class='link-box'>
				<ImageLink
					src='/github.png'
					link='http://github.com/jiko21'
				/>
				<ImageLink
					src='/twitter.svg'
					link='https://twitter.com/jiko_21'
				/>
				<ImageLink
					src='/blog.svg'
					link='https://jiko21-tech-blog.monster/'
				/>
			</div>
		</ContentBlock>
	</div>
	<MyFooter />
</div>

<style lang='scss'>
  * {
    margin: 0;
		line-height: 1.8rem;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    .wrap {
      // width: 100%;
      padding: 0 20%;
      @media screen and (max-width: 1200px) {
        padding: 0 20px;
      }
    }
  }

  .skill-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      margin: 0 10px;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      :first-child {
        margin: 0 0 10px;
      }
      div {
        margin: 0;
      }
    }
  }

  .link-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
		gap: 32px;
  }

  .works {
    display: flex;
    flex-wrap: wrap;

    > div {
      width: calc(100% / 3 - 8px);
      margin: 4px;
      @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 4px 0;
      }
    }
  }

	li {
		margin: 0.5rem 0;
	}
</style>
