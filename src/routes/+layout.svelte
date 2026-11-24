<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import { fade, fly } from "svelte/transition";
    import type { LayoutProps } from "./$types";
    import { page } from "$app/state";
    import { onMount } from "svelte";

    let { children, data }: LayoutProps = $props();

    const isPanorama = page.url.pathname.includes('/furries'); 
</script>

<Sidebar />

<!-- @todo: add reduced motion -->
{#key data.currentRoute}
    <div 
        class="wrapper" 
        style={isPanorama ? "max-width: 80vw" : "max-width: 60rem"}
        in:fly={{ duration: 300, delay: 150, y: 25 }} out:fade={{ duration: 150 }}
    >
        {@render children()}
    </div>
{/key}

<style>
    .wrapper {
        margin: 6em auto;
        z-index: 0;
        transition: all 0.3s;
        overflow-x: visible;
    }

    @media only screen and (max-width: 72rem) {
        .wrapper {
            margin: 6em 12.5%;
        }
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
