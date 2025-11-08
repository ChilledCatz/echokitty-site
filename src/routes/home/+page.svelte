<script lang="ts">
    import echoMid_bfThumbnail from "$lib/assets/echo/thumbnails/echoMid_bfThumbnail.png";
    import { setBackground } from '$lib/state.svelte'

    setBackground('#839ca9', null)
</script>

<svelte:head>
    <title>home</title>
</svelte:head>

<div class="homeGrid">
    <div class="introduction">
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

    <div>two</div>
    <div>three</div>
    <div>four</div>
    <div>five</div>
    <div>six</div>
    <div>seven</div>
</div>

<!-- would be cool to have the introduction transition in first, and then load the other divs in one by one left to right -->
<style>
    .homeGrid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        grid-template-rows: repeat(4, minmax(0, 1fr));
        gap: 1rem;
    }

    .homeGrid div {
        background-color: #131316;
        border: 2px solid;
        padding: 12px;
    }

    .introduction {
        grid-column: span 3 / span 3;
        grid-row: span 2 / span 2;
    }

    img {
        float: left;
        object-fit: cover;
        width: 150px;
        height: 225px;
        margin: 0px 20px 0px 0px;
    }
</style>
