<script lang="ts">
    import echoMid_bfThumbnail from "$lib/assets/echo/thumbnails/echoMid_bfThumbnail.png";
    import { setBackground } from '$lib/state.svelte'

    setBackground('#839ca9', null)
</script>

<svelte:head>
    <title>home</title>
</svelte:head>

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

<style>
    img {
        float: left;
        object-fit: cover;
        width: 150px;
        height: 225px;
        margin: 0px 20px 0px 0px;
    }
</style>
