<script lang="ts">
	import type { PostInterface } from "$lib/types/types";
    import { onDestroy, onMount } from "svelte";
	import type { Attachment } from "svelte/attachments";
    import { fade, fly } from "svelte/transition";
	import Taglist from "./Taglist.svelte";

    let { post }: { post: PostInterface } = $props()
</script>

<!-- @todo: add breakpoints for size so it scales better on home -->
<article class="container">
    <div class="thumbnail-grid">
        <a class="thumbnail" href={post.path} title="link to post">
            <img class="thumbnail-image" src={post.metadata.image} alt="thumbnail image for {post.metadata.title}" />
            <div class="thumbnail-shadow"></div>
        </a>
        <div class="title">{post.metadata.title} <span style="opacity: 50%; text-wrap: nowrap;">@ {post.metadata.date}</span> </div>

        <Taglist tags={post.metadata.tags} />
    </div>

    <div 
        in:fly={{ duration: 300, delay: 150, y: 25 }} 
        out:fade={{ duration: 150 }} 
        class="description"
    >
        {post.metadata.description}
    </div>
</article>

<style>
    .container {
        display: grid;
        grid-template-columns: 60% 40%;
        background-color: var(--container-color);
        border-bottom: 3px dotted var(--header-color);
        text-decoration: none;
        color: unset;
        width: 100%;
        height: 12vh;
        overflow: hidden;
        padding-bottom: 15px;
    }

    .thumbnail {
        position: relative;
        float: left;
        width: 20vw;
        height: 12vh;
        mask: linear-gradient(-77.5deg, transparent 50%, black 50%);
        mask-size: 40vw;
        mask-position: 10%;
        mask-repeat: no-repeat;
        shape-outside: polygon(0 0, 100% 0, 80% 100%, 0 100%);
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
        font-weight: bolder;
        margin-bottom: 4px;
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