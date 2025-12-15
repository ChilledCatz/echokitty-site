<script lang="ts">
	import Taglist from '$lib/components/blog/Taglist.svelte';

    export let data;
    const { title, image, date, tags, Content } = data;

    console.log(image)
</script>

<div class="article-wrapper">
    <article>
        <div class="article-header">
            <h2>{title}</h2>
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
        border-bottom: 3px white dotted;
    }

    .header-image {
        width: 100%;
        height: auto;
    }

    article {
        width: 75%;
        background-color: #131313;
        border: 2px solid white;
        padding: 12px;
    }

    @media only screen and (max-width: 40rem) {
        article {
            width: 100%;
        }
    }
</style>