<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import { backgroundState } from "$lib/state.svelte";
	import { fade } from "svelte/transition";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();
</script>

<Sidebar />
<div class="container">
    {@render children()}
</div>

{#if (backgroundState.image.src)}
    <enhanced:img
        in:fade={{ duration: 1000 }}
        out:fade={{ duration: 300 }}
        class="backgroundImage"
        src={backgroundState.image.src}
        alt={backgroundState.image.alt}
        style="{backgroundState.image.show
            ? 'opacity: 100%; transition: all 1s;'
            : 'opacity: 0%; transition: all 0.3s;'} ;"
    />
{/if}

<style>
    .container {
        padding: var(--container-padding);
        z-index: 0;
        transition: all 0.3s;
        width: calc(100vw - var(--sidebar-width) - (2 * var(--sidebar-padding)) - (2 * var(--container-padding)));
        margin-left: calc(var(--sidebar-width) + (2 * var(--sidebar-padding)));
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

    @media only screen and (max-width: 535px) {
        .container {
            margin-top: 64px;
            margin-left: unset;
            width: calc(100vw - 48px);
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
