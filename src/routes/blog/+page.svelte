<script lang="ts">
	import Post from '$lib/components/blog/Post.svelte';
    import { setTheme } from '$lib/state.svelte.js';

    let { data } = $props();

    setTheme('woodlands')
</script>

<svelte:head>
    <title>blog</title>
</svelte:head>

<section class="container">
    <h1>blog</h1>
    <p>now available as an <a href="/rss.xml">rss feed</a>!</p>
    <section>
        {#each data.posts as post}
            <Post post={post} />
        {/each}
    </section>
</section>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 1rem;
    }

    p {
        font-style: italic;
    }
</style>