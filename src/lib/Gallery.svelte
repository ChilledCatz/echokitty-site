<script lang="ts">
    import GalleryItem from "./GalleryItem.svelte";
    import { galleryState, setGalleryState } from "./state.svelte";

    let { items } = $props()
</script>


<div>
    {#each items as item}
        <GalleryItem src={item.src} thumbnail={item.thumbnail} alt={item.alt} description={item.description} />
    {/each}
</div>
{#if galleryState.src}
    <div class="gallery" role="none" onkeydown={() => {}} onclick={() => {setGalleryState(null, null, null)}}>
        <img class="galleryFull" src={galleryState.src} alt={galleryState.alt}>
        <div class="description">{galleryState.description}</div>
    </div>
{/if}

<style>
    .gallery {
        width: 100vw;
        height: 100vh;
        position: fixed;
        inset: 0;
        z-index: 20;
        transition: all 1s;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .galleryFull {
        position: fixed;
        max-width: 80%;
        height: auto;
        max-height: 80%;
        object-fit: contain;
        inset: 10% 20% 0% 19.5%;
    }

    .description {
        position: fixed;
        bottom: 0;
        left: 10%;
        right: 10%;
        bottom: 2.5%;
        text-align: center;
        background-color: blue;
        padding: 10px;
        border: solid 2px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
