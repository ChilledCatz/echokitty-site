<script lang="ts">
	import Post from '$lib/components/blog/Post.svelte';

    let { data } = $props()
</script>

<svelte:head>
    <title>blog: {data.tag}</title>
</svelte:head>

<div class="container">
    <h1>blog posts tagged as {data.tag}</h1>
    {#each data.posts as post}
        <Post post={post} />
    {/each}
</div>

<style>
    .container {
        background-color: #131313;
        border: 2px solid white;
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem
    }
</style>