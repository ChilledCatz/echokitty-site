<script lang="ts">
	import Taglist from '$lib/components/blog/Taglist.svelte';
    import { setTheme } from '$lib/state.svelte.js';

    let { data } = $props();
    const { title, description, image, alt, date, tags, Content } = data;

    setTheme('woodlands');
</script>

<svelte:head>
    <title>{ title }</title>
    <meta property="og:title" content={ title }>
    <meta property="og:description" content={ description }>
    <meta property="og:image" content={ image }>
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="484">
    <meta property="og:type" content="article">
    <meta property="og:article:published_time" content={ date }>
</svelte:head>

<div class="article-wrapper">
    <article>
        <div class="article-header">
            <img class="header-image" src={image} alt={alt} />
            <div style="display:flex; align-items: center;">
                <h1>{title}</h1>
                <Taglist tags={tags} multiline />
            </div>
            <p style="margin-top: 0px;"><span style="opacity: 50%;">published on:</span> {date}</p>
        </div>

        <div class="content">
            <Content />
        </div>
    </article>
</div>

<style>
    .article-wrapper {
        display: flex;
        justify-content: center;
    }

    .article-header {
        border-bottom: 3px var(--header-color) dotted;
        padding: 0 1rem;
    }

    .header-image {
        max-height: 50vh;
        width: 100%;
        object-fit: contain;
    }

    .content {
        padding: 0 1rem;
        line-height: 150%;
    }

    article {
        width: 50rem;
        background-color: var(--container-color);
        padding: 1rem;
    }

    @media only screen and (max-width: 40rem) {
        article {
            width: 100%;
        }

        .header-image {
            max-width: 100%;
            height: auto;
        }
    }
</style>