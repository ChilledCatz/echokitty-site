<script lang="ts">
    import Sidebar from "$lib/Sidebar.svelte";
    import { backgroundState } from "$lib/state.svelte";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();
</script>

<Sidebar />
<div
    class="container"
    style="{backgroundState.image.hasImage
        ? 'width: 40%; left: 10%; top: 60px;'
        : 'width: 50%; left: 25%; right: 25%; top: 60px;'} ;"
>
    {@render children()}
</div>
<div class="background" style="background-color: {backgroundState.color}"></div>
<img
    class="backgroundImage"
    src={backgroundState.image.src}
    alt={backgroundState.image.alt}
    style="{backgroundState.image.show
        ? 'opacity: 100%; transition: all 1s;'
        : 'opacity: 0%; transition: all 0.3s;'} ;"
/>

<style>
    .container {
        position: absolute;
        min-height: 33%;
        max-height: 100%;
        padding: 24px;
        z-index: 0;
        background-color: #131316;
        border: 2px solid;
        transition: all 0.3s;
    }

    .background {
        position: absolute;
        inset: 0;
        z-index: -20;
        transition: all 1s;
    }

    .backgroundImage {
        position: absolute;
        right: 0;
        top: 0;
        width: full;
        height: 100%;
        z-index: -20;
        object-fit: cover;
        transition: all 1s;
        pointer-events: none;
    }

    @keyframes imageEnter {
        from {
            opacity: 0%;
        }
        to {
            opacity: 100%;
        }
    }

    @keyframes imageLeave {
        from {
            opacity: 100%;
        }

        to {
            opacity: 0%;
        }
    }
</style>
