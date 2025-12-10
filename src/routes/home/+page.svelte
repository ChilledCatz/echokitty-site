<script lang="ts">
    import echoMid_bfThumbnail from "$lib/assets/echo/thumbnails/echoMid_bfThumbnail.png";
	import Post from "$lib/components/blog/Post.svelte";
    import { setBackground } from '$lib/state.svelte'
	import type { PostInterface } from "$lib/types/types.js";
    
    let { data } = $props();

    const higlightPosts = data.posts.filter((post: PostInterface) => post.metadata.isHighlight).slice(0, 3);
    const recentPosts = data.posts.slice(0, 3);
    
    setBackground('#839ca9')
</script>

<svelte:head>
    <title>home</title>
</svelte:head>

<div class="homeGrid">
    <div class="section-box introduction">
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
    </div>

    <div class="section">
        <h1>highlights</h1>
        <div class="section-grid">
            {#each higlightPosts as post}
                <Post post={post}/>
            {/each}
        </div>
    </div>

    <div class="section">
        <h1>recent</h1>
        <div class="section-grid">
            {#each recentPosts as post}
                <Post post={post}/>
            {/each}
        </div>
    </div>
</div>

<!-- would be cool to have the introduction transition in first, and then load the other divs in one by one left to right -->
<style>
    .homeGrid {
        height: calc(100vh - (2 * var(--container-padding)));
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 1rem;
    }

    .introduction {
        grid-row: span 2 / span 2;
    }

    .section {
        grid-column: span 3 / span 3;
    }

    .section-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .section-box {
        background-color: #131316;
        border: 2px solid;
        padding: 12px;
    }

    .introduction img {
        float: left;
        object-fit: cover;
        width: 150px;
        height: 225px;
        margin-right: 1em;
    }

    @media only screen and (max-width: 996px) {
        .homeGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-template-rows: repeat(4, minmax(0, 1fr));
        }

        .introduction {
            grid-column: 1 / 4;
        }
    }

    @media only screen and (max-width: 535px) {
        .homeGrid {
            display: flex;
            flex-direction: column;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            grid-template-rows: unset;
        }

        .introduction {
            grid-column: unset;
            grid-row: unset;
        }
    }
</style>
