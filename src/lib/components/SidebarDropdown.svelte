<script lang="ts">
    import { goto } from "$app/navigation";
    import { blur, fly } from "svelte/transition";

    let {children, title} = $props();
    let isOpen = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div 
    class="dropdown" 
    onclick={() => isOpen = !isOpen}
    onkeydown={(e) => {if (e.key === 'Enter') isOpen = !isOpen}}
    role="button" 
    tabindex={0}
>
    <div class="dropdownButton">
        {title}
    </div>
    
    {#if isOpen}
    <div transition:fly={{ duration: 200, y: -32 }} class="options">
        {#each children as child}
            <a href={child.href}>
                {child.title}
            </a>
        {/each}
    </div>
    {/if}
</div>

<style>
    .dropdown {
        text-decoration-line: none;
        background: linear-gradient(to left, rgba(0,0,0,0) 50%, blue 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        padding: 12px 24px;
        transition: all 0.3s ease;
        position: relative;
        cursor: pointer;
        color: #0090e0;
        border-color: white;
    }

    .dropdown:hover {
        border-color: white;
        background-position: left bottom;
        color: white;
    }

    .dropdownButton:hover {
        background-position: left bottom;
        color: white;
    }

    .options {
        position: absolute;
        top: 51px;
        left: 0;
        width: 64px;
        display: flex;
        flex-direction: column;
        background-color: #131316;
        border: 2px solid white;
        gap: 0.5rem;
        padding: 10px 16px;
        z-index: 20;
    }
</style>