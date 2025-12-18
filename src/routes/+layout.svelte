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
        padding: var(--container-padding);
        z-index: 0;
        transition: all 0.3s;
        width: calc(100vw - var(--sidebar-width) - (2 * var(--sidebar-padding)) - (2 * var(--container-padding)));
        margin-left: calc(var(--sidebar-width) + (2 * var(--sidebar-padding)));
        overflow-x: visible;
    }

    @media only screen and (max-width: 40rem) {
        .container {
            margin-top: 64px;
            margin-left: unset;
            width: calc(100vw - calc(2 * var(--container-padding)));
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
