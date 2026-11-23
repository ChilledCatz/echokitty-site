<script lang="ts">
	import Post from '$lib/components/blog/Post.svelte';
    import Link from '$lib/components/Link.svelte';
    import { setTheme } from '$lib/state.svelte.js';

    let { data } = $props();

    setTheme('woodlands')
</script>

<svelte:head>
    <title>blog</title>
</svelte:head>

<div class="title">
    <h1 class="big">blog</h1>
    <p>now available as an <Link href="/rss.xml">rss feed</Link>!</p>
</div>
<section class="container">
    <section style="width: 100%;">
        {#each data.posts as post}
            <Post post={post} />
        {/each}
    </section>
</section>

<style>
    .title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
    }

    p {
        font-style: italic;
    }
</style>