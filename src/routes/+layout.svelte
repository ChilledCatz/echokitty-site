<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();
</script>

<Sidebar />
<div class="container">
    {@render children()}
</div>

<style>
    .container {
        padding: var(--container-padding);
        z-index: 0;
        transition: all 0.3s;
        width: calc(100vw - var(--sidebar-width) - (2 * var(--sidebar-padding)) - (2 * var(--container-padding)));
        margin-left: calc(var(--sidebar-width) + (2 * var(--sidebar-padding)));
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
