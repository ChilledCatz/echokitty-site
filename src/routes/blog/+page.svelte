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

<section class="container">
    <h1 class="big">blog</h1>
    <p>now available as an <Link href="/rss.xml">rss feed</Link>!</p>
    <section style="width: 100%;">
        {#each data.posts as post}
            <Post post={post} />
        {/each}
    </section>
</section>

<style>
    .container {
        display: flex;
        width: calc(100% - (2 * var(--container-padding)) - 0.5rem);
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 1rem;
    }

    p {
        font-style: italic;
    }
</style>