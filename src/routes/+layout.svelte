<script lang="ts">
    import Sidebar from "$lib/Sidebar.svelte";
    import { backgroundState } from "$lib/state.svelte";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();
</script>

<Sidebar />
<div class="container">
    {@render children()}
</div>
<div class="background" style="background-color: {backgroundState.color}"></div>
<img 
    class="backgroundImage" 
    src={backgroundState.image.src} 
    alt={backgroundState.image.alt} 
    style="{backgroundState.image.show ? "opacity: 100%; transition: all 1s;" : "opacity: 0%; transition: all 0.3s;"} ;"
>

<style>
    .container {
        width: 40%;
        padding: 12px 12px 12px 24px;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 250px;
        background-color: #131316;
        border-right: 2px solid;
        border-bottom: 2px solid;
    }

    .background { 
        position: absolute;
        inset: 0;
        z-index: -10;
        transition: all 1s;
    }

    .backgroundImage {
        position: absolute;
        right: 0;
        top: 0;
        width: full;
        height: 100%;
        z-index: 0;
        object-fit: cover;
        transition: all 1s;
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
