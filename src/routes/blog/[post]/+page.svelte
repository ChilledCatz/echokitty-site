<script lang="ts">
	import Taglist from '$lib/components/blog/Taglist.svelte';

    let { data } = $props();
    const { title, image, date, tags, Content } = data;
</script>

<div class="article-wrapper">
    <article>
        <div class="article-header">
            <h1>{title}</h1>
            <img class="header-image" src={image} alt="cool awesome sick sweet" />
            <p style="font-style: italic; opacity: 50%;">published @ {date}</p>
            <Taglist tags={tags} multiline />
        </div>

        <Content />
    </article>
</div>

<style>
    .article-wrapper {
        display: flex;
        justify-content: center;
    }

    .article-header {
        border-bottom: 3px var(--header-color) dotted;
    }

    .header-image {
        max-height: 512px;
        object-fit: contain;
    }

    article {
        width: 75%;
        background-color: var(--container-color);
        padding: 12px;
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