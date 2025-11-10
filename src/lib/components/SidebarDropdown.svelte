<script lang="ts">
    import { slide } from "svelte/transition";

    let {children, title} = $props();
    let isOpen = $state(false);

    const isMobileView = false;
</script>

<button 
    class="dropdown" 
    onclick={() => isOpen = !isOpen}
    tabindex={0}
>
    <div class="dropdownText">
        {title}
    </div>
    
    {#if isOpen}
    <div transition:slide={{ axis: isMobileView ? 'y' : 'x' }} class="options">
        {#each children as child}
            <a href={child.href}>
                {child.title}
            </a>
        {/each}
    </div>
    {/if}
</button>

<style>
    .dropdown {
        display: flex;
        place-content: center;
        width: 64px;
        height: 64px;
        margin-left: 6px;
        text-decoration-line: none;
        background: linear-gradient(to left, rgba(0,0,0,0) 50%, blue 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.3s ease;
        position: relative;
        color: #0090e0;
        border: none;
        font-family: hack, monospace, sans-serif;
        font-size: medium;
    }

    .dropdown:hover {
        border-color: white;
        background-position: left bottom;
        color: white;
        cursor: pointer;
    }

    .dropdownText:hover {
        background-position: left bottom;
        color: white;
    }

    .options {
        position: absolute;
        top: 0px;
        left: 120%;
        width: 64px;
        display: flex;
        flex-direction: column;
        background-color: #131316;
        border: 2px solid white;
        gap: 0.5rem;
        padding: 10px 16px;
    }

    .options a {
        text-decoration-line: none;
    }

    @media only screen and (max-width: 535px) {
        .options {
            top: 120%;
            left: 0;
        }
    }
</style>