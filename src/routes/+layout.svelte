<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import { backgroundState } from "$lib/state.svelte";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();
</script>

<div class="site">
    <Sidebar />
    <div class="container">
        {@render children()}
    </div>
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
    .site {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 84px 1fr;
    }

    .container {
        padding: 24px;
        z-index: 0;
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
