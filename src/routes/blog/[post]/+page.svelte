<script lang="ts">
	import Taglist from '$lib/components/blog/Taglist.svelte';

    let { data } = $props();
    const { title, image, alt, date, tags, Content } = data;
</script>

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
        width: 75%;
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