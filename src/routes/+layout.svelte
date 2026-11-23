<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import { fade, fly } from "svelte/transition";
    import type { LayoutProps } from "./$types";

    let { children, data }: LayoutProps = $props();
</script>

<Sidebar />

<!-- @todo: add reduced motion -->
{#key data.currentRoute}
    <div class="container" in:fly={{ duration: 300, delay: 150, y: 25 }} out:fade={{ duration: 150 }} >
        {@render children()}
    </div>
{/key}

<style>
    .container {
        max-width: 60rem;
        margin: 6em auto;
        z-index: 0;
        transition: all 0.3s;
        overflow-x: visible;
    }

    @media only screen and (max-width: 72rem) {
        .container {
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
