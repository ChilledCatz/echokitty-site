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
        <p>hi there, i'm kat! (she/her)!</p>
        <p>
            i make pixel art and 3d models, while also trying to pick up music. this
            site acts as a useful hub for info about fursonas, me and some other cool
            stuff! you can find links to my socials and whatever else down at the bottom
            left ^^
        </p>
    </section>

    <section class="container introduction right-introduction">
        <h1>about</h1>
    </section>

    <!-- <section> -->
        <div class="highlights">
            <h1>highlights</h1>
            <div class="post-section">
                {#each higlightPosts as post}
                    <Post post={post}/>
                {/each}
            </div>
        </div>

        <div>
            <h1>recent</h1>
            <div class="post-section">
                {#each recentPosts as post}
                    <Post post={post}/>
                {/each}
            </div>
        </div>
    <!-- </section> -->
</div>

<!-- would be cool to have the introduction transition in first, and then load the other divs in one by one left to right -->
<style>
    .home {
        display: flex;
        flex-wrap: wrap;
        height: calc(100vh - (2 * var(--container-padding)));
    }

    .post-section {
        background-color: var(--container-color);
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .introduction {
        width: calc(50% - (2 * var(--container-padding)));
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

    /* @todo: fix the diagonal mask! */
    .left-introduction {
        mask: linear-gradient(-77.5deg, black 50vw, transparent 50vw, transparent 51vw, black 51vw);
        mask-size: calc(200% + (2 * var(--container-padding)));
    }

    .right-introduction {
        mask: linear-gradient(102.5deg, black 2vw, transparent 2vw, transparent 3vw, black 3vw);
        mask-size: 100%;
    }

    @media only screen and (max-width: 50rem) {
        .introduction {
            width: 100%;
        }

        .left-introduction {
            mask: unset;
            padding: inherit;
        }

        .right-introduction {
            mask: unset;
            padding: inherit;
        }
    }
</style>
