<script lang="ts">
    import GalleryItem from "./GalleryItem.svelte";
    import { backgroundState, galleryState, setGalleryState } from "../state.svelte";

    let { items } = $props()
</script>


<div class="thumbnailGrid">
    {#each items as item}
        <GalleryItem src={item.src} thumbnail={item.thumbnail} alt={item.alt} description={item.description} />
    {/each}
</div>
{#if galleryState.src}
    <div class="gallery" role="none" onkeydown={() => {}} onclick={() => {setGalleryState(null, null, null)}}>
        <img class="galleryFull" src={galleryState.src} alt={galleryState.alt}>
        <div class="description">{@html galleryState.description}</div>
    </div>
{/if}

<style>
    .thumbnailGrid {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        width: 100%;
        justify-items: center;
    }

    .gallery {
        width: 100vw;
        height: 100vh;
        position: fixed;
        inset: 0;
        z-index: 100;
        transition: all 1s;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .galleryFull {
        max-width: 85%;
        height: auto;
        max-height: 85%;
        object-fit: contain;
    }

    .description {
        position: fixed;
        bottom: 0;
        left: 10%;
        right: 10%;
        bottom: 14px;
        text-align: center;
        background-color: blue;
        padding: 10px;
        border: solid 2px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
