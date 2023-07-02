<script lang="ts">
	import HeadImage from '../components/HeadImage.svelte';
	import MyFooter from '../components/MyFooter.svelte';
	import { items } from '../contents';
	import 'modern-css-reset';
	import Profile from '../components/Profile.svelte';
	import Works from '../components/Works.svelte';
	import About from '../components/About.svelte';
	import Skill from '../components/Skill.svelte';
	import Slides from '../components/Slides.svelte';
	import Sns from '../components/Sns.svelte';

	let y;
</script>

<svelte:head>
	<title>jiko21.me</title>
	<meta name="description" content="jiko21's homepage" />
</svelte:head>
<svelte:window bind:scrollY={y} />
<div class="page-container" style="transform: translateY({Math.min(y, 800)}px)">
	<HeadImage />
	<div class="wrap">
		<About title={items['about'].title} detail={items['about'].detail} />
		<Profile  details={items['profile'].detail} />
		<Skill detail={items['skills'].detail} />
		<Works contents={items.works.contents} />
		<Slides />
		<Sns />
	</div>
	<MyFooter />
</div>

<style lang="scss">
	* {
		margin: 0;
		line-height: 1.8rem;
	}

	.page-container {
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-direction: column;
	}

	.wrap {
		@apply mx-auto mt-16 sm:w-8/12 w-10/12;
	}

	li {
		margin: 0.5rem 0;
	}
</style>
