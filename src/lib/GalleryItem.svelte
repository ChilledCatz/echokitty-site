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
        width: 100px;
        height: full;
        object-fit: cover;
    }

    .thumbnail {
        width: 100px;
        height: full;
    }
</style>
