<script lang="ts">
    import echoMid_bfThumbnail from "$lib/assets/echo/thumbnails/echoMid_bfThumbnail.png";
	import Post from "$lib/components/blog/Post.svelte";
    import { setTheme } from '$lib/state.svelte'
	import type { PostInterface } from "$lib/types/types.js";
    
    let { data } = $props();

    const higlightPosts = data.posts.filter((post: PostInterface) => post.metadata.isHighlight).slice(0, 3);
    const recentPosts = data.posts.slice(0, 3);
    
    setTheme('woodlands')
</script>

<svelte:head>
    <title>home</title>
</svelte:head>

<div class="home">
    <section class="container introduction left-introduction">
        <h1>:3</h1>
        <img
            src={echoMid_bfThumbnail}
            alt="my fursona, echo. she's a gay nebelung cat with nebuale for eyes"
        />
        <p>hi there! i'm kat (she/her) and welcome to my blog!</p>
        <p>
            this site also acts as a useful hub for any stuff i may make. right now it's mostly just fursonas and a post or two, but i hope to expand it in the future :)
        </p>
    </section>

    <section class="container introduction right-introduction">
        <h1>about me</h1>
        <p>
            i make pixel art and 3d models, while also trying to pick up music. this
            site acts as a useful hub for info about fursonas, me and some other cool
            stuff! you can find links to my socials and whatever else down at the bottom
            left ^^
        </p>

        <div class="socials">
            <button class="socials-button" onclick={() => {window.open('https://bsky.app/profile/oestrogeen.gratis', '_blank')}}>
                <img src="/images/svg/bluesky.svg" alt="bluesky logo" />
            </button>
        </div>
    </section>

    <div class="highlights">
        <h1 style="font-size: 200%; margin: 1rem;">highlights</h1>
        <section class="container post-section">
            {#each higlightPosts as post}
                <Post post={post}/>
            {/each}
        </section>
    </div>

    <div>
        <h1 style="font-size: 200%; margin: 1rem;">recent</h1>
        <section class="container post-section">
            {#each recentPosts as post}
                <Post post={post}/>
            {/each}
        </section>
    </div>
</div>

<!-- would be cool to have the introduction transition in first, and then load the other divs in one by one left to right -->
<style>
    .home {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .post-section {
        background-color: var(--container-color);
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .introduction {
        width: calc(50% - (2 * var(--container-padding)) - 0.5rem);
    }

    .introduction img {
        display: flex;
        float: left;
        object-fit: cover;
        width: 10rem;
        height: 15rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    .socials-button {
        --button-width: calc(100% - 8px);
        position: relative;
        width: 3rem;
        height: 2rem;
        background: var(--pure-color);
        border: none;
        mask: linear-gradient(-77.5deg, transparent 8px, black 8px, black var(--button-width), transparent var(--button-width));
        transition: all 0.3s;
    }

    .socials-button img {
        width: 2rem;
        height: inherit;
        position: absolute;
        top: 0;
        left: 0.5rem;
    }

    .socials-button:hover {
        background-color: var(--header-color);
        cursor: pointer;
    }

    @media only screen and (max-width: 50rem) {
        .introduction {
            width: 100%;
        }
    }
</style>
