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
        position: fixed;
        inset: 0;
        z-index: 20;
        transition: all 1s;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .galleryFull {
        max-width: 85%;
        height: auto;
        max-height: 85%;
        object-fit: contain;
    }

    .description {
        position: fixed;
        left: 50%;
        bottom: 2.5%;
        text-align: center;
    }
</style>
