<script lang="ts">
	import type { PostInterface } from "$lib/types/types";
	import type { Attachment } from "svelte/attachments";

    let { post }: { post: PostInterface } = $props();

    const taglistAttachment: Attachment = (element) => {
        const tags = element.children;

        // return (element) => {
        //     const overflowingTags = [...tags].filter((tag) => 
        //     // @ts-ignore (they do have these props and typing them so just makes ts yell at me more...)
        //         tag.offsetTop - element.offsetTop > element.offsetHeight
        //     );
        // }
    }
</script>

<!-- @todo: add breakpoints for size so it scales better on home -->
<article class="container">
    <div class="thumbnail-grid">
        <a class="thumbnail" href={post.path} title="link to post">
            <img class="thumbnail-image" src={post.metadata.image} alt="thumbnail image for {post.metadata.title}" />
            <div class="thumbnail-shadow"></div>
        </a>
        <div class="title">{post.metadata.title} <span style="opacity: 50%; text-wrap: nowrap;">@ {post.metadata.date}</span> </div>
        <div {@attach taglistAttachment} class="tag-container">
            {#each post.metadata.tags as tag}
                <a class="tag" href="/blog/category/{tag}">{tag}</a>
            {/each}
        </div>
    </div>
    <div class="description">{post.metadata.description}</div>
</article>

<style>
    .container {
        display: grid;
        grid-template-columns: 60% 40%;
        background-color: #131313;
        border-bottom: 3px dotted white;
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
        width: 25vw;
        height: 12vh;
        margin-right: 5%;
        mask: linear-gradient(77.5deg, black 50%, transparent 50%);
        mask-size: 50vw;
        mask-position: 10%;
        mask-repeat: no-repeat;
        shape-outside: polygon(0 0, 80% 0, 100% 100%, 0 100%);
        overflow: hidden;
    }

    .thumbnail-shadow {
        position: absolute;
        z-index: -10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: blue;
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
        padding-left: 45%;
    }

    .tag-container {
        overflow: hidden;
        height: calc(1rem + 16px);
    }

    .tag {
        z-index: 10;
        color: white;
        text-decoration: none;
        font-size: smaller;
        text-align: center;
        margin: 4px; 
        padding: 4px 8px;  
        background-color: gray; 
        display: inline-block;
        transition: all 0.3s;
    }

    .tag:hover{
        background-color: blue;
    }

    .description {
        opacity: 75%;
        height: 100%;
        font-style: italic;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left: 2%;
    }
</style>