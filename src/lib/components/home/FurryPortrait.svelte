<script lang="ts">
    import { refSheetThumbnail } from "$lib/assets/echo";
    import { glade_thumbnail } from "$lib/assets/glade";
    import Link from "../Link.svelte";

    const furries = [
        { src: refSheetThumbnail, url: '~/furries/echo.png', alt: "my fursona, echo. she's a gay nebelung cat with nebuale for eyes" },
        { src: glade_thumbnail, url: '~/furries/glade.png', alt: "tba, sorry..."}
    ];

    const index: number = Math.floor(Math.random() * (furries.length));
    const furry = furries[index];
</script>

<div class="portrait-wrapper">
    <p class="portrait-title">
        <Link href={furry.url.substring(1, furry.url.length - 4)}>
            {furry.url}
        </Link>
    </p>
    <enhanced:img class="portrait-image"
        src={furry.src} 
        alt={furry.alt}
    ></enhanced:img>
</div>
<div style="width: 96px; height: 108px; float:right; margin: -1rem -1rem 0 0; padding: 0 0 0.5rem 0.5rem;"></div>

<style>
    .portrait-wrapper {
        position: absolute; 
        top: calc(-108px - 1.125rem); 
        right: -48px; 
    }

    .portrait-image {
        width: 144px; 
        height: 216px; 
        object-fit: cover;
        box-shadow: 8px 8px var(--pure-color);
    }

    .portrait-title {
        font-style: italic;
        margin: 0rem;
        margin-bottom: 0.25rem;
        color: gray;
        font-size: 0.875rem;
        text-align: end;
    }
</style>