<script lang="ts">
    import { setGalleryState } from "./state.svelte";

    let { src, thumbnail, alt, description } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="galleryImage" onclick={() => {setGalleryState(src, alt, description)}}>
    <img class="thumbnail" src={thumbnail} alt={alt}>
</div>

<style>
    .galleryImage {
        width: 125px;
        height: full;
        object-fit: cover;
    }

    .thumbnail {
        width: 125px;
        height: full;
        cursor: pointer;
        transition: all 0.3s;
    }

    .thumbnail:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 16px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);
    }
</style>
