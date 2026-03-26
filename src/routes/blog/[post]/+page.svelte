<script lang="ts">
	import Taglist from '$lib/components/blog/Taglist.svelte';
    import { setTheme } from '$lib/state.svelte.js';
	import moment from 'moment';
	import { onMount } from 'svelte';

    let { data } = $props();
    const { title, description, image, alt, date, tags, readingTime, Content } = data;

    onMount(() => {
        setTheme('woodlands');
    })
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
            
            <div class="cool-angle"></div>

            <div class="byline">
                <time datetime={moment(date, "DD-MM-YYYY").toString()}>{date}</time>
                <span class="divider-dot">/</span>
                <span>{Math.round(readingTime.minutes)} minute read</span>
            </div>
            <h1 class="no-margin">{title}</h1>
            <p class="no-margin" style="font-style: italic;">{description}</p>

            <div style="display:flex; justify-content: end; margin-left: 1rem; margin-right: 1rem;">
                <Taglist tags={tags} multiline />
            </div>
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

    .cool-angle {
        --div-width: 8rem;
        float: left;
        margin-top: 1rem; 
        shape-outside: polygon(0 0, 100% 0, calc(var(--div-width) - 2rem) 100%); 
        mask: linear-gradient(
            -76deg, 
            transparent 5rem, 
            black 5rem, 
            black 5.5rem, 
            transparent 5.5rem
        );
        width: var(--div-width); 
        height: 5rem;
        background-color: var(--header-color)
    }

    .header-image {
        max-height: 50vh;
        width: 100%;
        object-fit: cover;
    }

    .byline {
        margin-top: 1rem;
        font-size: .875rem;
        color: rgba(255, 255, 255, 0.5);
        font-style: italic;
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

    .no-margin {
        margin: .1rem 0;
    }

    .divider-dot {
        color: var(--pure-color);
        font-style: normal;
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