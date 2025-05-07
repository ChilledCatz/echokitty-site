<script lang="ts">
    import Sidebar from "$lib/Sidebar.svelte";
    import { backgroundColor } from "$lib/state.svelte";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();
</script>

<Sidebar />
<div class="container">
    {@render children()}
</div>
<div class="background" style="background-color: {backgroundColor.color}"></div>    
<div class="prevBackground" style="background-color: {backgroundColor.prevColor}"></div>
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
        animation: 1s ease-in 0.5s bgFade;
    }

    .prevBackground {
        position: absolute;
        inset: 0;
        z-index: -20;
    }

    @keyframes bgFade {
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
    }
</style>
