<script lang="ts">
	import Post from '$lib/components/blog/Post.svelte';

    export let data;
</script>

<h1>blog</h1>

<div class="blog__container">
    {#each data.posts as post}
        <Post post={post} />
    {/each}
</div>

<style>
    .blog__container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem
    }
</style>