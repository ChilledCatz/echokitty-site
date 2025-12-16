<script lang="ts">
    import { slide } from "svelte/transition";
    import {clickOutside} from './events/clickOutside';

    let {children, title} = $props();
    let isOpen = $state(false);

    const isMobileView = false;
</script>

<button 
    use:clickOutside
    onoutsideclick={() => {isOpen = false}}
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
        background: linear-gradient(to top, rgba(0,0,0,0) 50%, var(--pure-color) 50%);
        background-size: 100% 200%;
        background-position: right bottom;
        transition: all 0.3s ease;
        position: relative;
        color: var(--link-color);
        border: none;
        font-family: hack, monospace, sans-serif;
        font-size: medium;
    }

    .dropdown:hover {
        border-color: var(--text-color);
        background-position: left top;
        color: var(--text-color);
        cursor: pointer;
    }

    .dropdownText:hover {
        background-position: left bottom;
        color: var(--text-color);
    }

    .options {
        position: absolute;
        top: 0px;
        left: 120%;
        width: 64px;
        display: flex;
        flex-direction: column;
        background-color: var(--container-color);
        border: 2px solid var(--text-color);
        gap: 0.5rem;
        padding: 10px 16px;
    }

    .options a {
        text-decoration-line: none;
    }

    @media only screen and (max-width: 40rem) {
        .options {
            top: 120%;
            left: 0;
        }
    }
</style>