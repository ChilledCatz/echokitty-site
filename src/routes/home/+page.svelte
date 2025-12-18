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
        <h1 class="big">:3</h1>
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
        <h1 class="big">about me</h1>
        <p>
            i'm kat / chilledcatz / catz! if the site url wasn't clear enough, i'm tramsgener (she/her) :3
        </p>
        <p>
            i'm in my early twenties. i love making things, going bouldering and yapping about music i like. hope to add some thoughts about albums here soon!    
        </p>
        <p>
            as for the creative stuff: i make pixel art, write, play the guitar... i like to call myself a stuff-maker rather than put myself into one specific category.
            i also just. don't tend to stick around with anything i do pick up, besides some exceptions. i still love whatever i do though :3
        </p>
        <p>
            also click my links if you want or not :)
        </p>

        <div class="socials">
            <button class="socials-button" onclick={() => {window.open('https://bsky.app/profile/oestrogeen.gratis', '_blank')}}>
                <img src="/images/svg/bluesky.svg" alt="bluesky logo" />
            </button>
            <button class="socials-button" onclick={() => {window.open('/rss.xml', '_blank')}}>
                <img src="/images/svg/rss.svg" alt="rss logo" />
            </button>
        </div>
    </section>

    <div style="width: 100%;">
        <h1>highlights</h1>
        <section class="container post-section">
            {#each higlightPosts as post}
                <Post post={post}/>
            {/each}
        </section>
    </div>

    <div style="width: 100%;">
        <h1>recent</h1>
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
