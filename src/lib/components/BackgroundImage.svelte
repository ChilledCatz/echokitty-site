<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

    let { src, alt } = $props();
    let isMounted = $state(false);

    onMount(() => { isMounted = true })
</script>

{#if isMounted}
    <enhanced:img 
        in:fade={{ duration: 1000, delay: 1000 }}
        out:fade={{ duration: 300 }}
        class="backgroundImage"
        src={src}
        alt={alt}
    />
{/if}

<style>
    .backgroundImage {
        position: fixed;
        right: 0;
        top: 0;
        width: unset;
        height: 100vh;
        z-index: -20;
        object-fit: cover;
        pointer-events: none;
    }
</style>