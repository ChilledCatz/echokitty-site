<script lang="ts">
	import Post from '$lib/components/blog/Post.svelte';
    import { setBackground } from '$lib/state.svelte.js';

    let { data } = $props();

    setBackground('#839ca9')
</script>

<svelte:head>
    <title>blog</title>
</svelte:head>

<section class="container">
    <h1>blog</h1>
    {#each data.posts as post}
        <Post post={post} />
    {/each}
</section>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>