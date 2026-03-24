<script lang="ts">
	import Post from '$lib/components/blog/Post.svelte';
    import { setTheme } from '$lib/state.svelte.js';

    let { data } = $props()

    setTheme('woodlands');
</script>

<svelte:head>
    <title>blog: {data.tag}</title>
</svelte:head>

<section class="container">
    <h1>blog posts tagged as {data.tag}</h1>
    {#each data.posts as post}
        <Post post={post} />
    {/each}
</section>

<style>
    .container {
        display: flex;
        width: 100%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>