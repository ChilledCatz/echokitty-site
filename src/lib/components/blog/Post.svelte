<script lang="ts">
	import type { PostInterface } from "$lib/types/types";
    import { fade, fly } from "svelte/transition";
	import Taglist from "./Taglist.svelte";
	import Link from "../Link.svelte";

    let { post }: { post: PostInterface } = $props()
</script>

<article class="container">
    <div class="thumbnail-grid">
        <a class="thumbnail" href={post.path} title="link to post">
            <img class="thumbnail-image" src={post.metadata.image} alt="thumbnail image for {post.metadata.title}" />
            <div class="thumbnail-shadow"></div>
        </a>
        <div class="title">{post.metadata.title}</div>
        <span style="opacity: 50%; text-wrap: nowrap;">@ {post.metadata.date}</span> 

        <Taglist tags={post.metadata.tags} />
    </div>

    <div 
        in:fly={{ duration: 300, delay: 150, y: 25 }} 
        out:fade={{ duration: 150 }} 
        class="description"
    >
        {post.metadata.description}

        <Link href={post.path}>read post</Link>
    </div>
</article>

<style>
    .container {
        display: grid;
        grid-template-columns: 50% 50%;
        background-color: var(--container-color);
        border-bottom: 3px dotted var(--header-color);
        text-decoration: none;
        color: unset;
        width: 100%;
        overflow: hidden;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }

    .container:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: none;
    }

    .thumbnail {
        --size: 20vw;
        position: relative;
        float: left;
        width: var(--size);
        height: 12vh;
        mask: linear-gradient(-77.5deg, transparent 50%, black 50%);
        mask-size: calc(2 * var(--size));
        mask-position: 10%;
        mask-repeat: no-repeat;
        shape-outside: polygon(0 0, 95% 0, 85% 100%, 0 100%);
        shape-margin: 1rem;
        overflow: hidden;
    }

    .thumbnail-shadow {
        position: absolute;
        z-index: -10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--pure-color);
    }

    .thumbnail-image {
        object-fit: cover;
        mask: inherit;
        width: 100%;
        height: 100%;
        transition: all 0.3s;
    }

    .thumbnail-image:hover {
        mask-size: 185%;
        transform: scale(1.05);
    }

    .title {
        /* font-weight: bold; */
        margin-bottom: 0.25rem;
        font-size: 1.25rem;
        line-height: calc(1.75 / 1.25);
    }

    .description {
        opacity: 75%;
        height: 100%;
        font-style: italic;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left: 2%;
    }

    @media only screen and (max-width: 50rem) {
        .container {
            display: block;
            height: 16rem;
            margin-bottom: 10px;
        }

        .thumbnail {
            width: 100%;
            height: 10rem;
            mask-size: 200%;
            mask: linear-gradient(-77.5deg, transparent 12.5%, black 12.5%, black 87.5%, transparent 87.5%);
        }

        .thumbnail-image:hover {
            mask-size: 100%;
        }

        .title {
            padding-top: 11rem;
        }

        .description {
            display: none;
        }
    }
</style>