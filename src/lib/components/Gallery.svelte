<script lang="ts">
    import GalleryItem from "./GalleryItem.svelte";
    import { backgroundState, galleryState, setGalleryState } from "../state.svelte";
	import { fade } from "svelte/transition";

    let { items } = $props()
</script>


<div class="thumbnailGrid">
    {#each items as item}
        <GalleryItem src={item.src} thumbnail={item.thumbnail} alt={item.alt} description={item.description} />
    {/each}
</div>
{#if galleryState.src}
    <div 
        transition:fade={{ duration: 150 }}
        class="gallery" 
        role="none" 
        onkeydown={() => { /* edit this pleeaaase */ }} 
        onclick={() => {setGalleryState(null, null, null)}}
    >
        <enhanced:img class="galleryFull" src={galleryState.src} alt={galleryState.alt} />
        <div class="description">{@html galleryState.description}</div>
    </div>
{/if}

<style>
    .thumbnailGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        margin-right: 24px;
    }

    .gallery {
        width: 100vw;
        height: 100vh;
        position: fixed;
        inset: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        align-items: center;
    }

    .galleryFull {
        max-width: 80vw;
        height: auto;
        max-height: 80vh;
        object-fit: contain;
    }

    .description {
        text-align: center;
        background-color: #131313;
        padding: 12px;
        border: solid 2px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
