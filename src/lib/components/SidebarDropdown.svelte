<script lang="ts">
    import { slide } from "svelte/transition";
    import {clickOutside} from './events/clickOutside';
    import { onMount } from "svelte";
	import Link from "./Link.svelte";

    let {children, title, icon} = $props();
    let isOpen = $state(false);
    let isMobileView = $state(false);

    const remToPix = (rem: number) => { 
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize) 
    }
 
    onMount(() => {
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);

        if (viewportWidth < remToPix(40)) {
            isMobileView = true;
        }
    })
</script>

<button 
    use:clickOutside
    onoutsideclick={() => {isOpen = false}}
    class="dropdown" 
    onclick={() => isOpen = !isOpen}
    tabindex={0}
>
    <div class="dropdownText">
        <img src={icon} alt="icon for {title}">
        {title}
    </div>
    
    {#if isOpen}
    <div transition:slide={{ axis: isMobileView ? 'y' : 'x' }} class="options">
        {#each children as child}
            <Link href={child.href} style="display: flex; justify-content: center;">
                <span class="clickHelper"></span>
                {child.title}
            </Link>
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
        margin-left: calc(var(--sidebar-padding) * 0.75);
        text-decoration-line: none;
        background: linear-gradient(to top, rgba(0,0,0,0) 50%, var(--pure-color) 50%);
        background-size: 100% 200%;
        background-position: right bottom;
        transition: all 0.3s ease;
        position: relative;
        color: var(--link-color);
        border: none;
        font-family: Selectric;
        font-size: medium;
    }

    .dropdown:hover {
        border-color: var(--text-color);
        background-position: left top;
        color: var(--text-color);
        cursor: pointer;
    }

    .dropdownText {
        display: flex; 
        flex-wrap: wrap; 
        justify-content: center; 
        align-items: center;
    }

    .dropdownText:hover {
        background-position: left bottom;
        color: var(--text-color);
    }

    .options {
        position: absolute;
        top: 0;
        left: calc(var(--sidebar-width) + 0.5rem);
        display: flex;
        flex-direction: column;
        background-color: var(--container-color);
        gap: 1rem;
        padding: 1rem 2rem;
        box-shadow: 4px 4px var(--pure-color);
    }

    .clickHelper {
        position: absolute;
        inset: 0;
        z-index: 1;
    }

    @media only screen and (max-width: 40rem) {
        .options {
            top: calc(var(--sidebar-height) + 0.5rem);
            left: 0;
            right: 0;
        }
    }
</style>