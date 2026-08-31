<script lang="ts">
	import type { PostInterface } from "$lib/types/types";
    import { fade, fly } from "svelte/transition";
	import Taglist from "./Taglist.svelte";
	import Link from "../Link.svelte";

    let { post }: { post: PostInterface } = $props()
</script>

<a class="post-container" href={post.path}>
    <div class="post-image-container">
        <img 
            class="post-image"
            src={post.metadata.image} 
            alt="thumbnail image for {post.metadata.title}"
        >
    </div>
    <div class="post-text-container">
        <div>
            <header class="post-title">{post.metadata.title}</header>
            <div class="post-description">{post.metadata.description}</div>
        </div>
        <div>
            <Taglist tags={post.metadata.tags} />
        </div>
    </div>
</a>

<style>
    .post-container {
        display: flex;
        justify-content: start;
        /* why is it like thisss */
        width: 80vw;
        background-color: var(--container-color);
        mask: linear-gradient(-77.5deg, transparent 5%, black 5%, black 95%, transparent 95%);
        mask-size: calc(2 * var(--size));
        mask-position: 10%;
        mask-repeat: no-repeat;
        shape-outside: polygon(0 0, 95% 0, 85% 100%, 0 100%);
        shape-margin: 1rem;
        overflow: hidden;
        text-decoration: none;

        transition: all 0.3s ease;
    }

    .post-image-container {
        width: 34%;
        height: 10rem;
        object-fit: cover;
        mask: linear-gradient(-77.5deg, transparent 14%, black 14%);
        mask-size: calc(2 * var(--size));
        mask-position: 10%;
        mask-repeat: no-repeat;
        shape-outside: polygon(0 0, 95% 0, 85% 100%, 0 100%);
        shape-margin: 1rem;
        overflow: hidden;
    }

    .post-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .post-text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 66%;
        padding: 1em;
        padding-left: 0.5em;

        color: var(--text-color);
    }

    .post-title {
        font-size: 1.5rem;
        color: var(--header-color);
    }

    .post-description {
        font-size: 0.875rem;
        font-style: italic;
    }

    /* hover styles */

    .post-container:hover {
        mask: linear-gradient(-77.5deg, transparent 5%, black 5%, black 100%, transparent 100%);
    }
</style>