<script lang="ts">
    import { setBackground } from '$lib/state.svelte'

    setBackground('#839ca9', null)
</script>

<svelte:head>
    <title>about me!</title>
</svelte:head>

<div class="aboutContainer">
    <h1>about</h1>
    <p>
        as stated before, hi! i'm kat (she/her), i'm a trans woman from the
        netherlands and my current interests are:
        <li>music</li>
        <li>3d models</li>
        <li>pixel art</li>
        <li>web dev</li>
        <br />
        i'm still a novice or intermediate at basically all these things but i'm more
        than willing to learn a bunch, so if you wanna chat about it gimme a dm! :3
    </p>
</div>

<style>
    .aboutContainer {
        width: 50%;
        background-color: #131316;
        border: 2px solid;
        padding: 12px 24px;
    }

    @media only screen and (max-width: 535px) {
        .aboutContainer {
            width: unset;
        }
    }
</style>